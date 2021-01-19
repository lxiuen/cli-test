<template>
  <div class="about">
    <h1>javaScript</h1>
    <div class="item-import">
      <h4></h4>
    </div>
  </div>
</template>

<script>
// 精准判断数据类型
function type(obj) {
  return Object.prototype.toString
    .call(obj)
    .split(" ")[1]
    .toLocaleLowerCase()
    .slice(0, -1);
}

// 深拷贝
function deepCopy(source) {
  let dataType = type(source);
  if (dataType === "object" || dataType === "array") {
    let result = dataType === "object" ? {} : [];
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        result[key] = deepCopy(source[key]);
      }
    }
    return result;
  } else {
    return source;
  }
}

console.log(
  deepCopy({
    a: 1,
    b: "alex",
    c: new Date(),
    d: function() {}
  })
);

//

Array.prototype.setUnique = function() {
  return [...new Set(this)];
};
Array.prototype.mapUnique = function() {
  const tmp = new Map();
  return this.filter(item => {
    return !tmp.has(item) && tmp.set(item, 1);
  });
};
const arr = [];
// 生成[0, 100000]之间的随机数
for (let i = 0; i < 100000; i++) {
  arr.push(0 + Math.floor((100000 - 0 + 1) * Math.random()));
}

// ...实现算法

console.time("test");
arr.setUnique();
console.timeEnd("test");
console.time("test");
arr.mapUnique();
console.timeEnd("test");

//
let computed = {
  a() {
    console.log("a属读取");
  },
  b: {
    get() {
      console.log("b属性 读取");
    },
    set() {
      console.log("b属性 设置");
    }
  }
};
for (const key in computed) {
  const userDef = computed[key];
  const getter = typeof userDef === "function" ? userDef : userDef.get;
  console.log(key, getter);
}

console.log("测试add ");
console.log("测试add ");
console.log("第二次修改");
</script>
