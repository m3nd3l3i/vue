<template>
  <h4>Pages</h4>
  <div class="text-end">
    <router-link to="/pages/create" class="btn btn-primary btn-sm">New page</router-link>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link Text</th>
        <th>URL Text</th>
        <th>Is Published</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(page) in $pages.getAllPages()"
          :key="page.link.url"
          @click="gotToPage(page.link.url)"
          >
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.link.url }}</td>
        <td>{{ page.published ? 'yes' : 'no' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import {ref, reactive, inject} from 'vue';
import { useRouter } from "vue-router";

const $pages = inject('$pages');
const router = useRouter();

function gotToPage(url) {
  router.push({path: `pages/${url}/edit`})
}
</script>
<style>
.table.table-hover tr:hover {
  cursor: pointer;
}
</style>