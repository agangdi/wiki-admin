<template>
  <v-dialog id="dialog" v-model="param">
    <v-btn primary dark slot="activator">Open Dialog</v-btn>
    <v-card>
      <v-card-row>
        <v-card-title>User Profile</v-card-title>
      </v-card-row>
      <v-card-row>
        <v-card-text>
          <v-container fluid>
            <v-text-field label="Email" required />
            <v-text-field label="Password" type="password" required />
            <v-text-field label="Legal first name" required />
            <v-text-field label="Legal middle name" hint="example of helper text only on focus" />
            <v-text-field label="Legal last name" hint="example of persistent helper text"
              persistent-hint
              required />
            <small>*indicates required field</small>
          </v-container>
        </v-card-text>
      </v-card-row>
      <v-card-row actions>
        <v-btn class="blue--text darken-1" flat @click.native="param = false">Close</v-btn>
        <v-btn class="blue--text darken-1" flat @click.native="save">Save</v-btn>
      </v-card-row>
    </v-card>
  </v-dialog>
</template>

<script>
// import httpClient from '../utils/httpClient'

export default {
  name: 'dialog',
  data: () => {
    return {
      param: false
    }
  },
  methods: {
    save: function (event) {
      console.log('param: ')
      console.log(this.param)
    },
    d4: function () {
      return false
    }
  }
}

// httpClient.get('/', {}, (res) => {
//   console.log(res)
// }, (err) => {
//   console.log(err)
// })

</script>
