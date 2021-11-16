import React from 'react';
import s from './Paginator.module.css';

let Paginator = ({ totalCountUsers, pageSize, changePage, currentPage }) => {
  let pagesCount = Math.ceil(totalCountUsers / pageSize);
  let pages = new Array(pagesCount).fill(1).map((e, index) => index + 1);
  return (
    <div>
      <div>Total : {totalCountUsers}</div>
      <div>Pages : {pagesCount}</div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              onClick={(e) => changePage(p)}
              className={currentPage === p ? s.selectedPage : ''}
            >
              {p},
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Paginator;
