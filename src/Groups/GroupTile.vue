<template>
<div class="">
  <div class="card">
    <div class="container padded-inbound">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">Jane Doe</p>
          <p class="subtitle is-6">Queen of Queens</p>
        </div>
      </div>
    </div>

    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="`static/${group.image}`" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="columns">
        <div class="column is-two-thirds">
          <p class="title is-2">{{ group.name }}</p>
          <p class="subtitle is-3">{{ group.goal }}</p>
        </div>
        <div class="column">
          <p class="title is-3">{{ group.amount.value }} {{ group.amount.currency }}</p>
          <p class="subtitle is-6">Payment interval of {{ group.term }} days.</p>
        </div>
      </div>

      <div class="content">
        <div v-if="group.description">
          {{ group.description.substr(0, 120) }}..
        </div>
        <small><router-link :to="{ name: 'group', params: { groupId: group.id }}">Show me more</router-link></small>
      </div>
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
.card {
  margin-top: 1em;
}

.padded-inbound {
  padding: 1em;
}
</style>
