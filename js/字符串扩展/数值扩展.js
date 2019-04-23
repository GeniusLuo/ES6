{
  // 判断是否为无穷尽
  console.log('15', Number.isFinite(15)) // true
  console.log('NaN', Number.isFinite(NaN)) // false
  console.log('1/0', Number.isFinite(1/0)) // false

  // 判断是数字
  console.log('NaN', Number.isNaN(NaN)) // true
  console.log('0', Number.isNaN(0)) // false
}

{
  // 判断是不是整数
  console.log('25', Number.isInteger(25)) // true
  console.log('25.0', Number.isInteger(25.0)) // true
  console.log('25.1', Number.isInteger(25.1)) // false
  console.log('25', Number.isInteger('25')) // false
}

{
  // 判断是有效的安全数
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER) // 9007199254740991 -9007199254740991
  console.log(10, Number.isSafeInteger(10)) // 10 true
  console.log('a', Number.isSafeInteger('a')) // a false
}

{
  // 取整数部分
  console.log(4.1, Math.trunc(4.1)) // 4
  console.log(4.9, Math.trunc(4.9)) // 4
}

{
  // 判断正负数
  console.log('-5', Math.sign(-5))// -1
  console.log('0', Math.sign(0)) // 0
  console.log('5', Math.sign(5)) // 1
  console.log('50', Math.sign('50')) // 1
  console.log('foo', Math.sign('foo')) // NaN
}
