<template>
  <div class="about">
    <h1>CSS</h1>
    <div class="item-import">
      <h4>flex3</h4>
      <div>行内文本<span>😊</span></div>
      <h4>flex3</h4>
      <div class="flex9">
        <div class="item" style="">1</div>
        <div class="item" style="">2</div>
        <div class="item" style="">3</div>
        <div class="item" style="">4</div>
        <div class="item" style="">5</div>
        <div class="item" style="">6</div>
        <div class="item" style="">7</div>
        <div class="item" style="">8</div>
        <div class="item" style="">9</div>
      </div>
      <h4>flex3</h4>
      <div class="flex">
        <div class="item" style="width:200px; order:0">1</div>
        <div class="item" style="width:200px; order:0">2</div>
        <div class="item" style="width:200px; order:0">3</div>
        <div class="item" style="width:200px; order:0">4</div>
      </div>
      <h4>flex2</h4>
      <div class="flex">
        <div class="item" style="width:200px">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item" style="width:300px">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item" style="width:200px">7</div>
        <div class="item" style="width:120px">8</div>
        <div class="item">9</div>
      </div>
    </div>
    <div class="item-import">
      <h4>flex</h4>
      <div class="flex">
        <div class="item">flex-item1</div>
        <div class="item">
          flex-item2
          <div class="empty-box"></div>
          <div class="empty-box"></div>
        </div>
        <div class="item">
          flex-item3
          <div class="empty-box"></div>
          <div class="empty-box"></div>
          <div class="empty-box"></div>
          <div class="empty-box"></div>
          <div class="empty-box"></div>
        </div>
        <div class="item">
          flex-item2
          <div class="empty-box"></div>
          <div class="empty-box"></div>
        </div>
        <div class="item">
          flex-item2
          <div class="empty-box"></div>
          <div class="empty-box"></div>
          <div class="empty-box"></div>
        </div>
        <div class="item">
          flex-item2
          <div class="empty-box"></div>
          <div class="empty-box"></div>
          <div class="empty-box"></div>
          <div class="empty-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/css.scss";
</style>
