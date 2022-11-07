import React from 'react';

import styles from './PokemonStats.module.css';

interface PokemonStatsProps {
  title: string;
  stats: PokemonStat[];
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({ title, stats }) => (
  <div className={styles.stats}>
    <h4>{title}</h4>
    {stats.map((stat) => (
      <ul className={styles.stats_list} key={stat.stat.name}>
        {stat.stat.name}: {stat.base_stat}
        <li className={styles.stats_item} style={{ width: `${stat.base_stat / 3}%` }} />
      </ul>
    ))}
  </div>
);
