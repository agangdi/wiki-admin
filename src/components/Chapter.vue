<template>
  <v-app>
    <v-dialog v-model="addDialog" fullscreen transition="v-dialog-bottom-transition" :overlay=false>
      <v-btn primary dark slot="activator">添加章节</v-btn>
      <v-card>
        <v-card-row>
          <v-toolbar>
            <v-toolbar-title>添加章节</v-toolbar-title>
            <v-btn class="white--text" flat="flat" @click.native="save">保存</v-btn>
            <v-btn class="white--text" flat="flat" @click.native="close">取消</v-btn>
          </v-toolbar>
        </v-card-row>
        <v-row>
          <v-col xs3>
            <v-subheader v-text="'父章节'" />
          </v-col>
          <v-col xs9>
            <v-select 
              v-bind:items="list"
              v-model="pid"
              label="Select"
              light
              item-value="id"
            />
          </v-col>
        </v-row>
        <v-row row>
          <v-col xs3>
            <v-subheader v-text="'上一章节'" />
          </v-col>
          <v-col xs9>
            <v-select 
              v-bind:items="list"
              v-model="pid"
              label="Select"
              light
              item-value="id"
            />
          </v-col>
        </v-row>
        <v-row row>
          <v-col xs3>
            <v-subheader v-text="'下一章节'" />
          </v-col>
          <v-col xs9>
            <v-select 
              v-bind:items="list"
              v-model="pid"
              label="Select"
              light
              item-value="id"
            />
          </v-col>
        </v-row>
        <v-row row>
          <v-col xs3>
            <v-subheader v-text="'标题'" />
          </v-col>
          <v-col xs9>
            <v-text-field
              name="input-1"
              label="Label Text"
              v-model="title"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row row>
          <v-col xs3>
            <v-subheader>正文</v-subheader>
          </v-col>
          <v-col xs9>
            <markdown-editor v-model="con" ref="markdownEditor"></markdown-editor>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  <v-card>
    <v-toolbar class="light-blue listToolbar">
      <v-toolbar-title>书籍列表</v-toolbar-title>
    </v-toolbar>
    <v-list two-line subheader>
      <v-list-item v-for="item in list" v-bind:key="item.title">
        <v-list-tile>
          <v-list-tile-content v-on:click="toChapter(item.id)">
            <v-list-tile-title>{{ item.title}}</span></v-list-tile-title>
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
  name: 'chapter',
  data: () => {
    return {
      book: {
        name: '',
        subtitle: ''
      },
      bookId: '',
      list: [],
      addDialog: false,
      pid: 0,
      con: '# Hello',
      prev: 0,
      next: 0,
      title: ''
    }
  },
  mounted () {
    console.log('mounted:')
    console.log(this.$route.params.bookId)
    this.bookId = this.$route.params.bookId
    this.fetchData()
  },
  methods: {
    fetchData () {
      httpClient.get('/book/' + this.bookId + '/chapter', {},
        (res) => {
          this.list = res.data.data
        }, (err) => {
          alert(err)
        })
    },
    save () {
      httpClient.post('/book/chapter', {
        bookId: this.bookId,
        pid: this.pid,
        prev: this.prev,
        next: this.next,
        con: this.con,
        title: this.title
      }, (res) => {
        this.fetchData()
      }, (err) => {
        alert(err)
      })
      this.close()
    },
    toAdd () {
      this.addDialog = true
    },
    close () {
      this.addDialog = false
    },
    del (id) {
      console.log(id)
    },
    toChapter (id) {
      location.hash = '/chapter/detail/' + id
    }
  }
}
</script>
