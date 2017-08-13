<template>
	<div class="content">
		<h2>{{group.name}}</h2>

		<div class="field is-horizontal">
			<div class="field-label is-normal">
			<label class="label">To</label>
			</div>
			<div class="field-body">
				<div class="field">
				  <p class="control is-expanded has-icons-left">
				    <input class="input" type="text" placeholder="Name">
				    <span class="icon is-small is-left">
				      <i class="fa fa-user"></i>
				    </span>
				  </p>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
			<label class="label">IBAN</label>
			</div>
			<div class="field-body">
				<div class="field">
				  <p class="control is-expanded has-icons-left">
				    <input class="input" type="text" placeholder="BANK 0000 000 000">
				    <span class="icon is-small is-left">
				      <i class="fa fa-university"></i>
				    </span>
				  </p>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
			<label class="label">BIC</label>
			</div>
			<div class="field-body">
				<div class="field">
				  <p class="control is-expanded has-icons-left">
				    <input class="input" type="text" placeholder="BANK 0000 000 000">
				    <span class="icon is-small is-left">
				      <i class="fa fa-university"></i>
				    </span>
				  </p>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
			<label class="label">Amount</label>
			</div>
			<div class="field-body">
				<div class="field has-addons has-addons-centered">
				  <p class="control">
				    <span class="select">
				      <select>
				        <option>€</option>
				        <option>£</option>
				      </select>
				    </span>
				  </p>
				  <p class="control is-expanded">
				    <input class="input " type="text" placeholder="Amount of money">
				  </p>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			  <div class="field-label">
			    <!-- Left empty for spacing -->
			  </div>
			  <div class="field-body">
			    <div class="field">
			      <div class="control">
			        <router-link class="button is-primary" to="payout/receipt">Make Payment</router-link>
			      </div>
			    </div>
			  </div>
			
    	</div>

    	<br />

		
		

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