const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

/**
 * Save updated page list to local cache
 */
function save() {
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {

    /**
     * Load pages from local browser cache storage OR from pages.json to local browser cache storage
     * @returns {Promise<void>}
     */
    async loadPages() {
        if (pagesStore === null) {
            let res = await fetch('pages.json');
            pagesStore = await res.json();
            save();
        }
    },

    /**
     * Add new page to local cache
     * @param page
     */
    addPage(page) {
        pagesStore.push(page);
        save();
    },

    /**
     * get all pages from local cache
     * @returns {any}
     */
    getAllPages()
    {
        return pagesStore;
    },

    /**
     * get single page from local cache
     * @param url
     * @returns {null}
     */
    getSinglePage(url) {
        let out = null;
        pagesStore.forEach((page, index) => {
                if(page.link.url === url) {
                    out = page;
                }
            });
            return out;
        },

    /**
     * Edit page in local cache
     * @param url
     * @param editedPage
     */
    editPage(url, editedPage) {
        pagesStore.forEach((page, index) => {
            if(page.link.url === url) {
                pagesStore[index] = editedPage;
                save();
            }
        });
    },

    /**
     * remove page from local cache
     * @param url
     */
    removePage(url) {
        pagesStore.forEach((page, index) => {
            if(page.link.url === url) {
                pagesStore.splice(index, 1);
                save();
            }
        });
    }
}