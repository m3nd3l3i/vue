const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

export default {
    async loadPages() {
        if (pagesStore === null) {
            let res = await fetch('pages.json');
            pagesStore = await res.json();
            localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
        }
    },

    addPage(page) {
        pagesStore.push(page);
        localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
    },

    getAllPages()
    {
        return pagesStore;
    },

    getSinglePage(url) {
        let out = null;
        pagesStore.forEach((page, index) => {
                if(page.link.url === url) {
                    out = page;
                }
            });
            return out;
        },

    editPage(url, editedPage) {
        pagesStore.forEach((page, index) => {
            if(page.link.url === url) {
                pagesStore[index] = editedPage;
                localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
            }
        });
    }
}