<template>
  <v-dialog id="dialog" v-model="open">
    <v-btn primary dark slot="activator">Open Dialog</v-btn>
    <v-card>
      <v-card-row>
        <v-card-title>User Profile</v-card-title>
      </v-card-row>
      <v-card-row>
        <v-card-text>
          <v-container fluid>
            <v-text-field label="书名" v-model="name" required />
            <small>{{ msg }}</small>
          </v-container>
        </v-card-text>
      </v-card-row>
      <v-card-row actions>
        <v-btn class="blue--text darken-1" flat @click.native="open = false">Close</v-btn>
        <v-btn class="blue--text darken-1" flat @click.native="save">Save</v-btn>
      </v-card-row>
    </v-card>
  </v-dialog>
</template>

<script>
import httpClient from '../utils/httpClient'

export default {
  name: 'dialog',
  data: () => {
    return {
      open: false,
      name: '',
      msg: '带*为必填项'
    }
  },
  methods: {
    save: function (event) {
      if (this.name === '') {
        this.msg = '请填写所有带*选项'
        return
      }
      console.log('param: ')
      console.log(this.param)
      httpClient.post('/book', {
        name: this.name
      }, (res) => {
        console.log(res)
        console.log(res.data)
      }, (err) => {
        console.log(err)
      })
      // this.close()
    },
    close: function () {
      this.open = false
    }
  }
}
</script>
