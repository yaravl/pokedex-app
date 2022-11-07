import classNames from 'classnames';
import React from 'react';

import styles from './PokemonType.module.css';

interface PokemonTypeProps {
  type: PokemonType['type'];
}

export const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => (
  <div key={type.name} className={classNames(styles[type.name], styles.type)}>
    {type.name}
  </div>
);
