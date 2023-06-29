<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label">Page Title</label>
          <input type="text" class="form-control" v-model="pageTitle" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Content</label>
          <textarea type="text" class="form-control" rows="5" v-model="content" ></textarea>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label">Link text</label>
          <input type="text" class="form-control" v-model="linkText"/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Link URL</label>
          <input type="text" class="form-control" v-model="linkURL"/>
        </div>
        <div class="row-mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="published">
            <label class="form-check-label" for="gridCheck1">Published</label>
          </div>
        </div>
      </div>
    </div>


      <div class="mb-3">
        <button
            class="btn btn-primary"
            @click.prevent="submitForm"
            :disabled="isFormInvalid"
        >Create Page</button>
      </div>
    </form>
</template>

<script>
export default {
  // emits: ['pageCreated'],
  emits: {
    pageCreated({pageTitle, content, link}) {
      return !(!pageTitle || !content || !link || !link.text || !link.url);

    }
  },
  expose: ['resetForm'],
  computed: {
    isFormInvalid() {
        return (!this.pageTitle || !this.content || !this.linkText || !this.linkURL);
    }
  },
    data() {
      return {
         pageTitle: '',
         content: '',
         linkText: '',
         linkURL: '',
         published: true
      }
    },
    methods: {
      resetForm(){
        this.content = '';
        this.pageTitle = '';
        this.linkText = '';
        this.linkURL = '';
      },
      submitForm() {
        if (!this.pageTitle || !this.content || !this.linkText || !this.linkURL) {
          alert('Something is missing');
          return;
        }

        this.$emit('pageCreated',{
          pageTitle: this.pageTitle,
          content: this.content,
          link: {
             text: this.linkText,
             url: this.linkURL
          },
          published: this.published
        },
            setTimeout(() => this.resetForm(), 500)
        );
      }
    },
    watch: {
      pageTitle(newTitle, oldTitle) {
        if (this.linkText === oldTitle) {
          this.linkText = newTitle;
        }
      }
    }
  }
</script>