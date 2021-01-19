<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sass">Sass</router-link> |
      <router-link to="/element">Element-ui</router-link> |
      <router-link to="/brush-javaScript">javaScript</router-link> |
      <router-link to="/css">CSS</router-link> |
      <router-link to="/grid">Grid</router-link> |
      <router-link to="/rem">Rem</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/index.scss";
</style>
