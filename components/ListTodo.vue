<template>
  <div class="container">
    <div class="todo-list">
     <FormTodo />
     <div class="contents">
       <Todos/>
     </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, State, Action } from "nuxt-property-decorator";
import FormTodo  from "./FormTodo.vue";
import Todos  from "./Todos.vue";

@Component({
  components: {
    FormTodo,
    Todos
  }
})
export default class ListTodo extends Vue {

  @Action('users/getAllUsers')
  readonly getAllUsers: Function;

  mounted() {
    this.getallpost();
  }

  getallpost() {
    this.getAllUsers();
  }
}

</script>