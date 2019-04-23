{
  let str = 'string';
  // 判断包含includes
  console.log('includes', str.includes('c')); // false
  console.log('includes', str.includes('s')); // true
  // 判断以字符开始  startsWith
  console.log('start', str.startsWith('str')) // true
  // 判断以字符结束  endsWith
  console.log('end', str.endsWith('ing')) // true
}

{
  // repeat重复
  let str = 'abc';
  console.log(str.repeat(2))
}

{
  // 模板字符串
  let name = 'list';
  let info = 'hello world';
  let m = `I am ${name}, ${info}`
  console.log(m); // I am list, hello world
}

{
  // 补白  --- 重要  在日期中经常可以用到 但是会有兼容性的问题
  console.log('1'.padStart(2, '0')) // 01
  console.log('1'.padEnd(2, '0')) // 10
}

{
  // 标签模板 使用场景一：过滤html字符串，防止xss攻击 使用场景二：用于多语言
  let user = {
    name: 'list',
    info: 'hello world'
  };

  console.log(abc`i am ${user.name},${user.info}`) // i am ,,,listhello world

  function abc(s, v1, v2) {
    console.log(s, v1, v2) // [ 'i am ', ', ', '' ] 'list' 'hello world'
    return s + v1 + v2
  }
}

{
  // 输出元字符 包括特殊字符  换行这种
  console.log(String.raw`Hi\n${1+2}`)
  console.log(`Hi\n${1+2}`)
}
