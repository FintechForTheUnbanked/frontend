<template>

  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="download.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
        </div>
      </div>




      <div class="content">
        <strong>Location:</strong> Westend<br>
        <strong>About me:</strong> I love shopping!<br><br>
        <strong>My Groups:</strong>
        <ul>
          <li>Internet Service</li>
          <li>Mcfit <span class="tag is-danger">DUE</span> </li>
          <li>Electricity</li>
        </ul>
        <br>
      <strong>Invited Groups:</strong>
      <ul>
        <li>Music</li>
        <li>Concert</li>
      </ul>
      </div>


      <div class="columns is-mobile">
        <div class="column">
          <p class="control">
          <router-link to="/groups/create" class="button is-primary">
            Start a group
          </router-link>
        </p>
        </div>
      </div>
    </div>

</div>


</template>
<script>
export default {

}
</script>
<style lang="scss">


</style>
