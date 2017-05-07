
<template>
  <div id="loginForm">
    <v-card>
      <v-card-row class="green darken-1">
        <v-card-title>登录</v-card-title>
      </v-card-row>
      <v-card-row>
        <v-card-text>
          <v-container fluid>
            <v-text-field label="Email" @keyup.enter.native="loginSub" v-model="email" required />
            <v-text-field label="Password" @keyup.enter.native="loginSub" v-model="password" type="password" required />
            <small class="red--text">{{ msg }}</small>
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

import httpClient from '../utils/httpClient'

import wikiConst from '../utils/wikiConst'

export default {
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
      if (this.email === '' || this.password === '') {
        this.msg = '请填写所有带*选项'
        return
      }
      httpClient.post('/login', {
        email: this.email,
        password: httpClient.md5(this.password)
      }, (res) => {
        if (res.data.code !== 0) {
          this.msg = '登录失败'
          return
        }

        console.log(res.data.data)
        console.log(res.data.data.token)
        // 将token和email存储于localStorge
        localStorage.setItem(wikiConst.token, res.data.data.token)
        localStorage.setItem(wikiConst.email, this.email)

        if (window.history.length > 2) {
          window.history.go(-1)
        } else {
          location.hash = '/'
        }
      }, (err) => {
        alert(err)
      })
    },
    init () {
      console.log('r u loged?')
    }
  }
}
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
