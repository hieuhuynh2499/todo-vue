<template>
  <div>
    <ListTodo/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ListTodo from "../components/ListTodo.vue";
@Component({
  components: {
    ListTodo,
  }
})
export default class Home extends Vue {
}
</script>
