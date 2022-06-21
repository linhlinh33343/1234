<template>
  <div class="navbar">
       <h1> My vueX todo list</h1>
       <ul>
          <li>Home</li>
          <li>About</li>
          <li v-if="auth.isAuthenticated"><button @click="TOGGLE_AUTH" >logout</button></li>
          <li v-else><button @click="TOGGLE_AUTH">login</button></li>

       </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name:'NavBar',
    computed:mapState(['auth']),
    methods:mapMutations(['TOGGLE_AUTH'])
}
</script>

<style>
    .navbar {
    padding: 5px;
    text-align: center;
    background: rgb(240, 240, 240);
    color: black;
    }

    .navbar ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    }
</style>