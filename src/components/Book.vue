<template>
  <v-app>
    <v-dialog id="dialog" v-model="open">
      <v-btn primary dark slot="activator">添加</v-btn>
      <v-card>
        <v-card-row>
          <v-card-title>书籍信息</v-card-title>
        </v-card-row>
        <v-card-row>
          <v-card-text>
            <v-container fluid>
              <v-text-field label="书名" @keyup.enter.native="save" v-model="name" required />
              <v-text-field label="副标题" @keyup.enter.native="save" v-model="subtitle" required />
              <small class="red--text">{{ msg }}</small>
            </v-container>
          </v-card-text>
        </v-card-row>
        <v-card-row actions>
          <v-btn class="blue--text darken-1" flat @click.native="open = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="save">Save</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
    <v-card class="listCard">
      <v-toolbar class="light-blue listToolbar">
        <v-toolbar-title>书籍列表</v-toolbar-title>
      </v-toolbar>
      <v-list two-line subheader>
        <v-list-item v-for="item in list" v-bind:key="item.title">
          <v-list-tile>
            <v-list-tile-content v-on:click="toChapter(item.id)">
              <v-list-tile-title>{{ item.name }}</span></v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn @click.native="del(item.id)" icon ripple>
                <v-icon class="grey--text text--lighten-1">删除</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-card>
  </v-app>
</template>

<script>
import httpClient from '../utils/httpClient'

export default {
  name: 'dialog',
  data: () => {
    return {
      open: false,
      name: '',
      subtitle: '',
      msg: '',
      list: []
    }
  },
  mounted () {
    console.log('mounted')
    this.fetchData()
  },
  methods: {
    save: function (event) {
      if (this.name === '' || this.subtitle === '') {
        this.msg = '请填写所有带*选项'
        return
      }
      console.log('data: ')
      console.log(this)
      httpClient.post('/book', {
        name: this.name,
        subtitle: this.subtitle
      }, (res) => {
        if (res.code === 0) {
          this.fetchData()
        } else {
          alert(res.msg)
        }
      }, (err) => {
        console.log(err)
      })
      return this.close()
    },
    del: function (id) {
      if (!confirm('确定删除？')) {
        return
      }
      console.log('delete: ' + id)
      httpClient.delete('/book/' + id, {},
        (res) => {
          this.fetchData()
        }, (err) => {
          alert(err)
        })
    },
    toChapter: function (bookId) {
      console.log(bookId)
      location.hash = '/chapter/' + bookId
    },
    close: function () {
      this.open = false
      return this.open
    },
    fetchData () {
      httpClient.get('/book', {},
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
