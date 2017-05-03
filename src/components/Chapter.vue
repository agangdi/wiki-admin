<template>
  <div>
    Chapter
  </div>
</template>

<script>
import httpClient from '../utils/httpClient'
httpClient.get('/',
  {},
  function (res) {
    console.log(res)
  }, function (err) {
    console.log(err)
  })
</script>
