<template>
  <div>
    <ul class="step">
        <li :class="[{'is-active': step >= n}, 'step-item']" v-for="n in (steps * 1)">
            <a href="#steps"></a>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: [
      "step",
      "steps",
  ]
}
</script>
<style lang="scss">
@import "~bulma";
@import "assets/bulma-steps/steps.sass"
</style>
