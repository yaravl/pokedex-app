import React from 'react';

import styles from './PokemonTypes.module.css';
import classNames from "classnames";

interface PokemonTypesProps {
  types: PokemonType[];
}

export const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => (
  <div className={styles.pokemon_types}>
      <div className='mb-1 flex justify-center gap-2'>
        {types.map((type) => (
          <div
            key={type.type.name}
            className={classNames('h-3 w-3 rounded-full', `bg-elm-${type.type.name}`)}
          />
        ))}
      </div>

      <div className='text-sm capitalize'>
        {types[0].type.name}
        {types[1] && ` / ${types[1].type.name}`}
      </div>
      <div>Type</div>
  </div>
);
