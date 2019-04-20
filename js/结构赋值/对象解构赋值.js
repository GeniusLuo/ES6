/** 对象解构赋值 */
{
  let a, b;
  ({a, b} = {a: 1, b: 2})
  console.log(a, b) // 1 2
}

{
  let o = {p: 42, q: true}
  let {p, q} = o;
  console.log(p, q) // 42, true
}

{
  // 带默认值的解构赋值
  let {a = 10, b = 5} = {a: 3}
  console.log(a, b) // 3, 5
}

{
  // 深层次对象解构
  let metaData = {
    title: 'abc',
    test: [
      {
        title: 'test',
        desc: 'description'
      }
    ]
  }
  let {title: esTitle, test: [{title: cnTitle}]} = metaData;
  console.log(esTitle, cnTitle) // abc test
}
