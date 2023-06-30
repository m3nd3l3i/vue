<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{page.pageTitle}}</h1>
    <p>{{page.content}}</p>
  </div>
</template>

<script>
export default {
  props: ['url'],
  inject: ['$pages'],
  created(){
      this.page = this.$pages.getSinglePage(this.url);
    },
  data() {
    return {
      page: null
    }
  },
  watch: {
    url(newUrl, oldUrl) {
      this.page = this.$pages.getSinglePage(newUrl);
    }
  }
}
</script>
<style scoped>
  .emphasize {
    color: forestgreen;
  }
</style>