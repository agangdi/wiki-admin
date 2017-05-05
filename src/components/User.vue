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
        this.close()
      }, (err) => {
        console.log(err)
      })
    },
    fetchData () {
      httpClient.get('/user', {},
        (res) => {
          this.list = res.data
          console.log(res)
        }, (err) => {
          console.log(err)
        })
    }
  }
}
</script>
