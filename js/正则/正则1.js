{
  // 正则的创建 es5写法
  let regex = new RegExp('xyz', 'i')
  let regex2 = new RegExp(/xyz/i)

  //test 测试字符中有没有制定的字符，有就返回true,没有就返回false
  console.log(regex.test('xyz123'), regex2.test(('xyz123'))) // true true
}

{
  // es6 中允许第二个参数填修饰符，并且 第二个会覆盖第一个
  let regex3 = new RegExp(/xyz/ig, 'i') // i修饰符覆盖了ig修饰符
  // flag属性是es6中正则新增的属性，为了获取正则修饰符的
  console.log(regex3.flags) // i
}

{
  /**
   * g和y修饰符都是全局查找
   * y修饰符也称“粘连”修饰符 y必须从保证从上一次结果开始
   * */

    // es6新新增y,u修饰符
  let s = 'bbb_bb_b'
  let a1 = /b+/g
  let a2 = /b+/y

  console.log('one', a1.exec(s), a2.exec(s))
  // one [ 'bbb', index: 0, input: 'bbb_bb_b', groups: undefined ] [ 'bbb', index: 0, input: 'bbb_bb_b', groups: undefined ]
  console.log('two', a1.exec(s), a2.exec(s))
  // two [ 'bb', index: 4, input: 'bbb_bb_b', groups: undefined ] null


  // sticky判断正则中是否开启了y修饰符模式
  console.log(a1.sticky, a2.sticky) // false true
}

{
  // u修饰符 unicode 在正则处理unicode时 加了u修饰符会将所有字符当成一个unicode码


  console.log('u-1', /^\uD38D/.test('\uD83D\udC2A')); // true \uD83D\udC2A当成两个字符分别匹配
  console.log('u-1', /^\uD38D/u.test('\uD83D\udC2A')); // false \uD83D\udC2A当成一个unicode码匹配

  console.log(/\u{61}/.test('a')) // false \u0061时a的unicode码
  console.log(/\u{61}/u.test('a')) // true

// 如果你的字符串中是大于两个自己字节的就要用u修饰符
  let s = '𠮷' // \ud842\udfb7
  console.log('u', /^.$/.test(s)) //  false
  console.log('u-2', /^.$/u.test(s)) // true .可以匹配任何字符？小于两个字节的才可以

  console.log('u-3', /^𠮷{2}$/.test('𠮷𠮷')) // false
  console.log('u-3', /^𠮷{2}$/u.test('𠮷𠮷')) // true
}
