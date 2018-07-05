/**
 * Return a fibonacci sequence as an array.
 *
 * @param n 斐波那契的长度（除了第一位的0）
 * @return {number[]}
 */
export default function fibonacci(n) {
  const fibSequence = [1];

  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return fibSequence;
  }

  let iterationsCounter = n - 1;

  while (iterationsCounter) {
    currentValue += previousValue;
    // 相当于求和的新值减去前面的前面的值得到求和新值的前一个值
    previousValue = currentValue - previousValue;
    
    fibSequence.push(currentValue);

    iterationsCounter -= 1;
  }

  return fibSequence;
}
