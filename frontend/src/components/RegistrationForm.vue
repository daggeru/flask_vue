<template>
  <b-container>
    <br><br>
    <h1>Registration</h1>
    <br><br>
    <b-row>
      <b-form inline>
        <label class="sr-only" for="usern">Name</label>
        <b-input class="mb-2 mr-sm-2 mb-sm-0"
                 id="usern"
                 v-model="userData.username"
                 placeholder="Username"/>

        <label class="sr-only"
               for="passwd">Username</label>
        <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="passwd"
                   v-model="userData.password"
                   placeholder="Password"/>
        </b-input-group>

        <b-button @click="register" variant="primary">Register</b-button>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        userData: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      register() {
        this.$store.dispatch('registerAction', this.userData);
      }
    }
  }
</script>

<style>

</style>
