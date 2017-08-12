<template>
  <div>
    <Steps step="1" steps="3" />
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Name of your Group">
      </div>
    </div>

    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>
    <a class="button" :@click="$route.go()">Pick a goal</a>
  </div>
</template>
<script>
import Steps from "../StepsComponent.vue"
export default {
  components: {
    Steps: Steps
  }
}
</script>
<style lang="scss">

</style>
