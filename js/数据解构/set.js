{
  let list = new Set();
  list.add(5)
  list.add(7)

  // 获取Set中长度
  console.log('size', list.size); // 2
}

{
  // Set初始化
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr)

  console.log('size', list.size) // 5
}

{
  // Set 里面值是唯一的，可以用来去重, 但是不会进行数据类型的转换
  let list = new Set();
  list.add(1)
  list.add(2)
  list.add(1)

  console.log('size', list.size) // 2

  let arr = [1, 2, 3, 1, '2', 3]
  let list2 = new Set(arr)

  console.log('unique', list2) // Set { 1, 2, 3, '2' }
}

{
  // Set的Api
  let arr = ['add', 'delete', 'clear', 'has'] // 四个方法
  let list = new Set(arr)

  console.log('has', list.has('add')) // true
  console.log('delete', list.delete('add'), list) // true Set { 'delete', 'clear', 'has' }
  list.clear()
  console.log('clear', list) //Set {}
}

{
  // Set的遍历
  let arr = ['add1', 'delete', 'clear', 'has'] // 四个方法
  let list = new Set(arr)

  for (let key of list.keys()) {
    console.log('key', key)
  }

  /*key add1
  key delete
  key clear
  key has*/

  for (let value of list.values()) {
    console.log('value', value)
  }

  /*value add1
  value delete
  value clear
  value has*/

  for (let [key, value] of list.entries()) {
    console.log('entries', key, value)
  }

  /*entries add1 add1
  entries delete delete
  entries clear clear
  entries has has*/

  list.forEach(item => console.log(item))
  /*add1
  delete
    clear
  has*/
}

{
  // weakSet
  // weekSet 只支持对象，而且对象是弱引用 不能遍历
  let weakList = new WeakSet()

  let arg = {};
  weakList.add(arg) // 只支持对象
  console.log('weakList', weakList); // 正常
}

{
  let map = new Map();
  let arr = ['123']

  // 添加元素 可以将数组变为key值
  map.set(arr, 456);

  console.log('map', map, map.get(arr)) // Map { [ '123' ] => 456 } 456
}

{
  let map = new Map([['a', 123], ['b', 456]])
  console.log(map); // Map { 'a' => 123, 'b' => 456 }

  // 获取长度
  console.log('size', map.size) // 2
  map.delete('a')
  console.log('after delete', map) // { 'b' => 456 }
  map.clear()
  console.log('after clear', map) // Map {}

  // 遍历方法可参考Set的遍历方式
}

{
  let weekmap = new WeakMap();
  // 用法和weekSet一样
}
