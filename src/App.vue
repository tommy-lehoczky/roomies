<template>
  <div id="app">
    <navigation/>
    <div class="wrapper">
      <div class="container">
        <transition name="page-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
  @import './assets/css/style.css';
  @import './assets/css/animate.css';
</style>
