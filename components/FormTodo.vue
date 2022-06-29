<template>
  <form class="form-sutmit"  @submit.prevent="createNewUser">
    <div class="container-input">
      <input v-model="newUserName"  type="text" class="input">
      <button class="form-btn">Add</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Action } from "nuxt-property-decorator";
@Component({})
export default class FormTodo extends Vue {

  @Action('users/createUserNew')
  readonly createUserNew: Function;

  newUserName:string = '';

  createNewUser() {
    this.createUserNew({
      vueIntance: this,
      newUserName: this.newUserName,
    })
    this.newUserName = ''
  }
}
</script>