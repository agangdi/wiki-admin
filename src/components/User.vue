<template>
  <div>
    <v-dialog v-model="addUserDialog">
      <v-btn primary dark slot="activator">添加用户</v-btn>
      <v-card>
        <v-card-row>
          <v-card-title>添加用户</v-card-title>
        </v-card-row>
        <v-card-row>
          <v-card-text>
            <v-container fluid>
              <v-text-field label="Name" v-model="name" required />
              <v-text-field label="Email" v-model="email" required />
              <v-text-field label="Password" v-model="password" type="password" required />
              <small class="red--text">{{ msg }}</small>
            </v-container>
          </v-card-text>
        </v-card-row>
        <v-card-row actions>
          <v-btn class="blue--text darken-1" flat @click.native="close">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="add">Save</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
    <v-card id="listCard">
      <v-toolbar id="listToolbar" class="light-blue">
        <v-toolbar-title>用户列表</v-toolbar-title>
      </v-toolbar>
      <v-list two-line subheader>
        <v-list-item v-for="item in list" v-bind:key="item.title">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.email}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon class="grey--text text--lighten-1">删除</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import httpClient from '../utils/httpClient'
export default {
  name: 'user',
  data () {
    return {
      addUserDialog: false,
      name: '',
      email: '',
      password: '',
      msg: '',
      list: []
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
    this.fetchData()
  },
  methods: {
    close () {
      this.addUserDialog = false
    },
    add () {
      if (this.name === '' || this.email === '' || this.password === '') {
        this.msg = '请填写所有带*选项'
        return
      }
      console.log(this.data)
      httpClient.post('/reg', {
        name: this.name,
        email: this.email,
        password: httpClient.md5(this.password)
      }, (res) => {
        this.fetchData()
        this.close()
      }, (err) => {
        console.log(err)
      })
    },
    fetchData () {
      httpClient.get('/user', {},
        (res) => {
          this.list = res.data.data
          console.log(res)
        }, (err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.toolbar__title:first-child {
  padding-left: 12px;
}
#listCard {
  min-width: 325px;
  width: auto;
  margin: 0 auto;
}
#listToolbar {
  height: 42px;
  padding: 15px;
}
</style>
