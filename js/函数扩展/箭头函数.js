/**
 *  箭头函数： 1. 函数名 2. 函数参数 3. 函数返回值
 *
 * */
{
  let arrow = v => v * 2;
  console.log(arrow(3)) // 6
  let arrow2 = () => 5;
  console.log(arrow2()) // 5
}

{
  // 伪调用 --- 函数编程中的概念
  function tail(x) {
    console.log('tail', x)
  }

  function fx(x) {
    return tail(x)
  }
  fx(123)
}
