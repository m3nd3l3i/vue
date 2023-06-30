<template>
  <h4>
    Edit {{ page.pageTitle }}
  </h4>

  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label">Page Title</label>
          <input type="text" class="form-control" v-model="page.pageTitle" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Content</label>
          <textarea type="text" class="form-control" rows="5" v-model="page.content" ></textarea>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label">Navigation Header</label>
          <input type="text" class="form-control" v-model="page.link.text"/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Link URL</label>
          <input type="text" class="form-control" v-model="page.link.url"/>
        </div>
        <div class="row-mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="page.published">
            <label class="form-check-label" for="gridCheck1">Published</label>
          </div>
        </div>
      </div>
    </div>


    <div class="mb-3">
      <button class="btn btn-danger me-4" @click.prevent="deletePage">Delete</button>
      <button class="btn btn-secondary me-4" @click.prevent="gotToPagesList">Cancel</button>
      <button class="btn btn-primary" @click.prevent="submit">Save</button>
    </div>
  </form>

</template>
<script setup>

  import { useRouter } from "vue-router";
  import { inject } from "vue";

  const router = useRouter();
  const pages = inject('$pages');
  const bus = inject('$bus');

  const {url} = defineProps(['url']);

  let page = pages.getSinglePage(url);

  function submit() {
    pages.editPage(url, page);

    bus.$emit('page-updated', {
      url,
      page
    });

    gotToPagesList();
  }
  function gotToPagesList() {
      router.push({path: '/pages'});
    }

  function deletePage() {
    pages.removePage(url);

    bus.$emit('page-deleted', { url });

    gotToPagesList();
  }


</script>