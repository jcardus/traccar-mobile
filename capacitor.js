// intercept api requests
const oldFetch = window.fetch;
window.fetch = async (url, options) => {
    if (typeof url === 'string' && url.startsWith('/api')) {
        url = `https://${import.meta.env.VITE_TRACCAR_SERVER}${url}`;
        return oldFetch(url, options);
    }
    return oldFetch(url, options);
};
