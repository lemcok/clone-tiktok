import React from 'react';
import s from './styles.module.css';

export const IconPlayer = ({ playing }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 26 26"
         width={100}
         height={100}
         className={s.player}
      >
         <path fill="none" d="M0 0h24v24H0z" />
         <path
            fill={ !playing ? '#fff' : 'none' }
            d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
         />
      </svg>
   );
};
