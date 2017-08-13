<template>
	<div class="content">
		<h2>{{group.name}}</h2>
		<h4>Recipent:</h4>
		<h4>Product:</h4>
		<h4>Amount:</h4>
		<h4>Date:</h4>

		Thank you!
	</div>
</template>
<script>
import Groups from '../fixtures/groups.json'

export default {
  data() {
    return {
      group: Groups.filter(g => g.id === this.$route.params.groupId)[0]
    }
  }
}
</script>
<style lang="scss">
</style>