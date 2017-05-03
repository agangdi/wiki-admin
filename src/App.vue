
<template>
  <v-app id="example-4" left-fixed-sidebar sidebar-under-toolbar>
    <v-toolbar class="blue-grey">
      <v-toolbar-side-icon @click.native.stop="nav4 = !nav4" class="hidden-sm-and-up red lighten-4"/>
      <v-toolbar-title>头部</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-sidebar class="mt-0 scroll-y " :mobileBreakPoint="576" fixed>
        <v-list>
          <v-list-item v-for="item in navs">
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
export default {
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
        }
      ]
    }
  }
}
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
