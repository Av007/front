export const getEnvsUrl = () => {
    // eslint-disable-next-line no-undef
    const URL = import.meta.env.VITE_URL || process.env.VITE_URL;
    console.log(URL, 'url');
    return URL;
    
}
