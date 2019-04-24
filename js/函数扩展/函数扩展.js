{
  // 函数参数默认值
  function test(x, y = 'world') {
    console.log('默认值', x, y);
  }

  test('hello'); // hello world
  test('hello', 'kill'); // hello kill
}

{
  // 函数参数默认值
  let x = 'test';

  function test2(x, y = x) {
    console.log('作用域', x, y)
  }

  test2('kill') // kill, kill
}

{
  // 将一系列的参数转成数组 注意：arg后面不允许其它参数
  function test3(...arg) {
    for (let v of arg) {
      console.log('rest', v);
    }
  }

  test3(1, 2, 3, 4);
  /*rest 1
  rest 2
  rest 3
  rest 4*/
}

{
  console.log(...[1, 2, 3])
}
