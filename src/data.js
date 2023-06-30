const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

function save() {
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {
    async loadPages() {
        if (pagesStore === null) {
            let res = await fetch('pages.json');
            pagesStore = await res.json();
            save();
        }
    },

    addPage(page) {
        pagesStore.push(page);
        save();
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
                save();
            }
        });
    },

    removePage(url) {
        pagesStore.forEach((page, index) => {
            if(page.link.url === url) {
                pagesStore.splice(index, 1);
                save();
            }
        });
    }
}