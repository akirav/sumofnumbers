function sumfor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) sum += list[i];
  return sum;
}

function sumwhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

function sumRecursion(list) {
  return (list.length === 0) ? 0 : list[0] + sumRecursion(list.slice(1));
}

console.log('Testing');
console.log(sumfor([1, 2, 3, 4, 5]));
console.log(sumwhile([1, 2, 3, 4, 5]));
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
console.log(sumRecursion([1, 2, 3, 4, 5]));
