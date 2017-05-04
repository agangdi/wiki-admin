
<template>
  <div id="loginForm">
    <v-card>
      <v-card-row class="green darken-1">
        <v-card-title>登录</v-card-title>
      </v-card-row>
      <v-card-row>
        <v-card-text>
          <v-container fluid>
            <v-text-field label="Email" v-model="email" required />
            <v-text-field label="Password" v-model="password" required />
            <small>{{ msg }}</small>
          </v-container>
        </v-card-text>
      </v-card-row>
      <v-card-row actions>
        <v-btn class="blue--text darken-1" flat @click.native="loginSub">Login</v-btn>
      </v-card-row>
    </v-card>
  </div>
</template>

<script>
var mod = {
  name: 'app',
  data () {
    return {
      logDialog: true,
      email: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    loginSub () {
      console.log(window.history)
      if (window.history.length > 2) {
        window.history.go(-1)
      } else {
        location.hash = '/'
      }
    },
    init () {
      console.log('r u loged?')
    }
  }
}
mod.methods.init()
module.exports = mod
</script>

<style scoped>

#loginForm {
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}
.card {
}
</style>
