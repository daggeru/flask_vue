<template>
  <b-container>
    <br><br>
    <h1>Login</h1>
    <br><br>
    <b-row>
      <b-form inline>
        <label class="sr-only" for="uslogim">Name</label>
        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="uslogin"
                 v-model="userData.username"
                 placeholder="Username"/>
        <label class="sr-only"
               for="uspasswd">Username</label>
        <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="uspasswd"
                   v-model="userData.password"
                   placeholder="Password"/>
        </b-input-group>
        <b-button @click="uslogin" variant="primary">Save</b-button>
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
    uslogin() {
      this.$store.dispatch('loginAction', this.userData);
    }
  }
}
</script>

<style>

</style>
