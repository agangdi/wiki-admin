<template>
	<div>
		book
	</div>
</template>

<script>
import httpClient from '../utils/httpClient'

httpClient.get('/', function (res) {
  console.log(res)
}, function (err) {
  alert(err)
})

</script>
