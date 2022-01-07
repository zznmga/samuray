import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({
  totalItemsCount,
  pageSize,
  changePage,
  currentPage,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = new Array(pagesCount).fill(1).map((e, index) => index + 1);

  const paginatorCount = Math.ceil(pagesCount / portionSize);
  let [paginatorNum, setPaginatorNum] = useState(1);

  let leftBorder = (paginatorNum - 1) * portionSize + 1;
  let rightBorder = leftBorder + portionSize;

  return (
    <div>
      <div>Total : {totalItemsCount}</div>
      <div>Pages : {pagesCount}</div>
      <div>PaginatorCount : {paginatorCount}</div>
      <div>PaginatorNum : {paginatorNum}</div>

      <div className={styles.paginator}>
        {paginatorNum > 1 && (
          <button onClick={(e) => setPaginatorNum(paginatorNum - 1)}>
            Prev
          </button>
        )}
        {pages
          .filter((p) => p >= leftBorder && p < rightBorder)
          .map((p) => {
            return (
              <span
                key={p}
                onClick={(e) => changePage(p)}
                className={cn(styles.pageNumber, {
                  [styles.selectedPage]: currentPage === p,
                })}
              >
                {p},
              </span>
            );
          })}
        {paginatorNum < paginatorCount && (
          <button onClick={(e) => setPaginatorNum(paginatorNum + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
