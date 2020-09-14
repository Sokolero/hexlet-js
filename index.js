import _ from 'lodash';

console.log('Первый проект запущен!');
console.log(_.last(['one', 'two']));

const fn = (a, b) => {
  const c = a + b;
  return c;
};

console.log(fn(5, 9));
