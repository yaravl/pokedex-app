import classNames from 'classnames';
import React from 'react';

import styles from './PokemonHero.module.css';

interface PokemonHeroProps {
  pokemon: Pokemon;
}

export const PokemonHero: React.FC<PokemonHeroProps> = ({ pokemon }) => (
  <div className={classNames(`bg-elm-${pokemon.types[0].type.name}`, styles.hero)}>
    <div className='text-white'>
      <div className='text-3xl font-medium capitalize tracking-wider'>{pokemon.name}</div>
      <div className='text-xl font-light'>#{pokemon.id.toString().padStart(3, '0')}</div>
    </div>
    <div className='absolute top-[50%] left-[calc(40%_-_17rem)] h-[220px] w-[220px] translate-y-[-50%] opacity-20'>
      <img src={`/icons/pokemon-types/${pokemon.types[0].type.name}.svg`} alt='' />
    </div>
    <div className={styles.imgwrap}>
      <img
        width={400}
        height={400}
        src={
          pokemon.sprites.other['official-artwork'].front_default ||
          pokemon.sprites.front_default ||
          ''
        }
        alt={`Pokemon - ${pokemon.name}`}
      />
    </div>

    <div className={styles.characteristics}>
      <div>
        <div className='mb-1 flex justify-center gap-2'>
          {pokemon.types.map((type) => (
            <div
              key={type.type.name}
              className={classNames('h-3 w-3 rounded-full', `bg-elm-${type.type.name}`)}
            />
          ))}
        </div>

        <div className='text-sm capitalize'>
          {pokemon.types[0].type.name}
          {pokemon.types[1] && ` / ${pokemon.types[1].type.name}`}
        </div>
        <div>Type</div>
      </div>
      <div>
        <div>{pokemon.weight / 10} kg</div>
        <div>Weight</div>
      </div>
      <div>
        <div>{pokemon.height / 10} m</div>
        <div>Height</div>
      </div>
    </div>
  </div>
);
