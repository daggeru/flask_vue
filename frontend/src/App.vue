<template>
  <b-container id="app">
    <b-nav pills>
      <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item v-if="!logged">
        <router-link to="/registration">Registration</router-link>
      </b-nav-item>
      <b-nav-item v-if="!logged">
        <router-link to="/login">Login</router-link>
      </b-nav-item>
    </b-nav>
    <router-view/>
  </b-container>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      logged() {
        return this.$store.state.isLogged;
      },
    }
  }
</script>

<style>
  a {
    color: #b4d455;
  }
</style>
