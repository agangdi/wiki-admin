
<template>
  <v-app id="example-4" left-fixed-sidebar sidebar-under-toolbar>
    <v-toolbar class="blue-grey">
      <v-toolbar-title>头部</v-toolbar-title>
      <v-btn primary dark @click.native="goLogin" >Login</v-btn>
    </v-toolbar>
    <main>
      <v-sidebar class="mt-0 scroll-y " :mobileBreakPoint="576" fixed>
        <v-list>
          <v-list-item v-for="item in navs" :key="item.id">
            <router-link v-bind:to="item.url">
              <v-list-tile>
                {{ item.text }}
              </v-list-tile>
            </router-link>
          </v-list-item>
        </v-list>
      </v-sidebar>
      <v-content>
        <v-container fluid>
          <div id="app">
            <router-view></router-view>
          </div>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
var mod = {
  name: 'app',
  data () {
    return {
      navs: [
        {
          url: '/',
          text: 'index'
        },
        {
          url: '/book',
          text: 'book'
        },
        {
          url: '/chapter',
          text: 'chapter'
        },
        {
          url: '/user',
          text: '用户管理'
        }
      ],
      name: '',
      msg: ''
    }
  },
  methods: {
    init () {
      console.log('r u loged?')
    },
    goLogin () {
      location.hash = '/login'
    }
  }
}
mod.methods.init()
module.exports = mod
</script>

<style scoped>
.sidebar--open, .sidebar--open.sidebar--mobile {
    transform: translateX(0);
    width: 150px;
}
.with.left-fixed-sidebar main, .with.left-fixed-sidebar footer{
  padding-left: 150px;
}
a {
  text-decoration: none;
}
#app{
  padding: 15px;
}
</style>
