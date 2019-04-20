/** let 定义变量 */

"use strict" //严格模式


function test() {
  let a = 2;
  console.log(a)
}

test();

// es6
function test2() {
  for (let i=1; i<3; i++) {
    console.log(i);
  }
  console.log(i);
}

test2() // 报错

// es5
function test3() {
  for (var i=1; i<3; i++) {
    console.log(i);
  }
  console.log(i);
}

test3() // 正常输出
