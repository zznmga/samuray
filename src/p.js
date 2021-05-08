// let F = (n) => {
//   return new Promise((res, rej) => {
//     n < 50 ? res(n * 2) : rej('error');
//   });
// };

// F(1)
//   .then((r) => {
//     console.log('[1] :', r);
//     return F(r);
//   })
//   .then((r) => {
//     console.log('[2] :', r);
//     return F(r);
//   })
//   .catch((e) => console.log('error : ', e));

let pages = new Array(pagesCount).fill(1).map((e, index) => index + 1);
console.log(pages);
