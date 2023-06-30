<template>
  <navbar v-if="pagesLoaded" :key="$route.fullPath"></navbar>
  <router-view v-if="pagesLoaded"></router-view>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import {inject} from "vue";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      pagesLoaded: false
    }
  },
  methods: {
    loadPagesFromFile() {
      const pages = inject('$pages');
      pages.loadPages().then((data) => {
            this.pages = data;
            this.pagesLoaded = true
          });
    }
  },
  mounted() {
    this.loadPagesFromFile();
  }
}
</script>