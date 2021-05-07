let F = (n) => {
  return new Promise((res, rej) => {
    n < 50 ? res(n * 2) : rej('error');
  });
};

F(1)
  .then((r) => {
    console.log('[1] :', r);
    return F(r);
  })
  .then((r) => {
    console.log('[2] :', r);
    return F(r);
  })
  .catch((e) => console.log('error : ', e));
