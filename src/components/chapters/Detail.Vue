<template>
  <div>
    <v-card>
      <v-card-text>
        <div>{{ model.title }}</div>
      </v-card-text>

      <v-card-text>
        <markdown-editor v-model="model.con" preview-class="markdown-body">{{ model.con }}</markdown-editor>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import httpClient from '../../utils/httpClient'

export default {
  name: 'AddChapter',
  data: () => {
    return {
      book: {
        name: '',
        subtitle: ''
      },
      id: '',
      model: {}
    }
  },
  mounted () {
    console.log('mounted:')
    console.log(this.$route.params.id)
    this.id = this.$route.params.id
    this.fetchData()
  },
  methods: {
    fetchData () {
      httpClient.get('/book/chapter/' + this.id, {},
        (res) => {
          this.model = res.data.data
        }, (err) => {
          alert(err)
        })
      console.log(this.$data)
    }
  }
}
</script>
