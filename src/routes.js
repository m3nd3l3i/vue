import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import pageViewer from "@/views/PageViewer.vue";
import CreatePage from "@/views/CreatePage.vue";
import Pages from "@/views/Pages.vue";
import PageList from "@/views/PageList.vue";
import PageEdit from "@/views/PageEdit.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/:url?', component: pageViewer, props: true },
        { path: '/pages', component: Pages, children: [
                { path: '', component: PageList },
                { path: 'create', component: CreatePage},
                { path: ':url/edit', component: PageEdit, props: true},
            ]},

    ]
});

export default router;