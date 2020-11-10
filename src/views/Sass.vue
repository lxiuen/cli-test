<template>
  <div class="sass">
    <h1>Sass example page</h1>
    <div class="item-var">
      <h4>使用变量</h4>
      <p>变量以$开头</p>
    </div>
    <div class="item-rule">
      <h4>嵌套规则</h4>
      <p>&表示 选中当前元素父元素</p>
      <ul>
        <li>嵌</li>
        <li>套</li>
        <li>选</li>
        <li>择</li>
        <li><router-link to="/element">器</router-link></li>
        <li>属</li>
        <li>性</li>
        <li>选</li>
        <li>择</li>
        <li>器</li>
      </ul>
    </div>
    <div class="item-import">
      <h4>@import</h4>
      <p>全局/局部导入SASS文件</p>
      <p>使用sass的@import命令在css内部引入另一个css文件</p>
      <p>导入变量的优先级问题-变量默认值：!default</p>
    </div>
    <div class="item-">
      <h4>注释</h4>
      <p>/*...*/ 注释会被保留到编译后的css文件中</p>
      <p>// 注释不会被保留到编译后生成的css文件中</p>
    </div>
    <div class="item-mixin">
      <h4>混淆器(函数)</h4>
      <p>@mixin 将重复的代码片段提取 以复用</p>
      <p>@include 使用混合器函数</p>
      <button>@include引用</button>
    </div>
    <div class="item-from">
      <h4>继承</h4>
      <p>%classname 定义被继承的样式</p>
      <p>类似静态语言中的抽象类，他本身不起作用，只用于被其他人继承</p>
      <p>@extend %classname(或 .classname) 继承样式</p>
      <p>
        <span class="from">A</span>
        <span>B继承A</span>
      </p>
    </div>
    <div class="item-">
      <h4>操作符</h4>
      <p>SCSS提供了标准的算术运算符，例如+、-、*、/、%。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sass"
};
</script>

<style lang="scss" scoped>
@import "../styles/sass.scss";
</style>
