<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ group.name }}</p>
          <p class="subtitle is-6">{{ group.goal }}</p>
        </div>
      </div>

      <div class="content">
        <div v-if="group.description">
          {{ group.description }}
        </div>
        <small>11:09 PM - 1 Jan 2016</small>
        <router-link :to="{ name: 'group', params: { groupId: group.id }}">Show me more...</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "group"
  ]
}
</script>
<style lang="scss">

</style>
