<template>
  <div class="about">
    <h1>rem</h1>
    <div class="item-import">
      <h4>rem布局</h4>
      <div class="px"></div>
      <div class="container">
        <div class="inner">1</div>
        <div class="inner">2</div>
        <div class="inner">3</div>
        <div class="inner">4</div>
        <div class="inner">5</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../styles/rem.scss";
</style>
<style scoped>
.container {
  width: 200px;
  height: 400px;
  background: pink;
  position: absolute;
  display: table;
  vertical-align: middle;
}

.inner {
  display: table-cell;
  vertical-align: middle;
}
</style>
<script>

var print = function(i) {
  console.log(i);
};

[1, 2, 3].forEach(print);
</script>
