export const getEnvsUrl = () => {
    console.log(import.meta.env, window.ENV, 'env');
    // eslint-disable-next-line no-undef
    const URL = window.ENV.VITE_URL || import.meta.env.VITE_URL || process.env.VITE_URL;
    console.log(URL, 'url', 'env');
    return URL;
    
}
