import classNames from 'classnames';
import React from 'react';

import { MAX_BASE_STATS, STATS_LABELS } from '@utils/constants';

import styles from './PokemonStats.module.css';

interface PokemonStatsProps {
  title: string;
  stats: PokemonStat[];
  colorType: string;
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({
  title,
  stats,
  colorType = 'normal'
}) => (
  <div className={styles.stats}>
    <h2>{title}</h2>
    <ul className={styles.stats_list}>
      {stats.map((label, index) => {
        const statName = STATS_LABELS[index];
        return (
          <li className={styles.stats_item} key={statName}>
            <div className='w-24 font-light'>{statName}</div>
            <div className='mr-1.5 w-7'>{label.base_stat}</div>
            <div className='h-2 w-full flex-1 overflow-hidden rounded bg-blue-50'>
              <div
                className={classNames(`bg-elm-${colorType} h-full rounded`)}
                style={{ width: `${(label.base_stat / MAX_BASE_STATS) * 100}%` }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);
