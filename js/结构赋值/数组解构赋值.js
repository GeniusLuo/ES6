/** 数组解构赋值 */

{
  let a, b;
  [a, b] = [1, 2]
  console.log(a, b)
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, rest) // 1 2 [ 3, 4, 5, 6 ]
}

{
  let a, b;
  [a, b, c] = [1, 2]
  console.log(a, b, c) // 1, 2, undefined
}


{
  let a, b;
  [a, b, c = 3] = [1, 2]
  console.log(a, b, c) // 1, 2, 3
}

{
  // 变量的替换
  let a = 1, b = 2;
  [a, b] = [b, a];
  console.log(a, b); // 2, 1
}

{
  // 接收函数返回值
  function f() {
    return [1, 2]
  }

  let a, b;
  [a, b] = f()
  console.log(a, b) // 1, 2
}

{
  // 接收某些函数返回值
  function f() {
    return [1, 2, 3, 4, 5]
  }

  let a, b, c;
  [a, , , b] = f()
  console.log(a, b) // 1, 4
}

{
  // 接收某些函数返回值
  function f() {
    return [1, 2, 3, 4, 5]
  }

  let a, b, c;
  [a, ...b] = f()
  console.log(a, b) // 1, [2,3,4,5]
}
