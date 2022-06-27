<template>
  <div>
    this is test
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { getallpost } from "../apollo/queries/post.query";
@Component({})
export default class extends Vue {
  
  mounted() {
    this.getallpost();
  }
  async getallpost() {
    console.log(this)
    try {
      await this.$apolloProvider.defaultClient.query({
        query: getallpost,
      }).then(({ data }) => {
        console.log(data)
      });
    } catch (error) {
      throw new Error(error);
    }
  }

}

</script>