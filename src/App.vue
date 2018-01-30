<template>
  <div id="app" class="row">
    <div id="cover" class="row"></div>
    <Header></Header>
    <todo></todo>
    <footer>Written by Fred</footer>
  </div>
</template>

<script>
  import Header from './todo/header.vue'
  // import 'bootstrap/dist/css/bootstrap.css'
  import Todo from './todo/todo.vue'

export default {
  name: 'App',
  components:{
    Header,Todo
  }
}
</script>

<style lang="stylus" scoped>
  #app{

  }
  #cover
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999999
    opacity .9
    z-index -1
  footer{
    bottom: 60px;
    display: table;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>
