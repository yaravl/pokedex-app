import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, PokemonStats, PokemonTypes } from '@common';
import { useRequestPokemonQuery } from '@utils/api';
import { useStore } from '@utils/contexts';
import { useAddDocumentMutation, useUpdateUsersMutation } from '@utils/firebase';

import styles from './Pokemon.module.css';

interface PokemonProps {
  pokemonName: string;
  pokemonId: number;
  onClose: () => void;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemonName, pokemonId, onClose }) => {
  const {
    sessions,
    user,
    data: { myPokemons },
    setStore
  } = useStore();

  const addDocumentMutation = useAddDocumentMutation({
    options: {
      onSuccess: (data) => {
        onClose();
        return data;
      }
    }
  });

  const updateUsersMutation = useUpdateUsersMutation({
    options: {
      onSuccess: (data) => {
        console.log(data);
        return data;
      }
    }
  });

  const navigate = useNavigate();

  const { data, isLoading, isError } = useRequestPokemonQuery({
    params: { name: pokemonName }
  });

  if (isError) return <h5>Error!</h5>;
  if (isLoading) return <h5>Loading...</h5>;

  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemon_header}>
        <h2>{data.name}</h2>
        <div>#{data.id.toString().padStart(3, '0')}</div>
      </div>

      <div className={styles.pokemon_imgwrap}>
        <PokemonTypes types={data.types} />
        <img src={data.sprites.front_default || ''} alt='pokemon' height={344} width={344} />
      </div>

      <PokemonStats title='Stats' stats={data.stats} colorType={data.types[0].type.name} />

      <Button
        onClick={() => {
          navigate(`/pokemon/${pokemonName}`);
        }}
      >
        Open
      </Button>

      {sessions.isSignIn && (
        <Button
          isLoading={addDocumentMutation.isLoading}
          onClick={() => {
            updateUsersMutation.mutate({
              collectionName: 'users',
              userId: user.uid,
              data: { myPokemons: [{ id: pokemonId, name: pokemonName }] }
            });
            const pokemonContains = myPokemons.some((item) => item.id === pokemonId);
            if (!pokemonContains) {
              setStore({
                data: { myPokemons: [...myPokemons, { id: pokemonId, name: pokemonName }] }
              });
            }
          }}
        >
          Add to favorites
        </Button>
      )}
      <div>
        {myPokemons && myPokemons.map((item: any) => <div key={item.name}>{item.name}</div>)}
      </div>
    </div>
  );
};
