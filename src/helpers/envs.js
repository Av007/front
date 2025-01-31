export const getEnvsUrl = () => {
    // eslint-disable-next-line no-undef
    return import.meta.env.VITE_URL || process.env.VITE_URL;
}
