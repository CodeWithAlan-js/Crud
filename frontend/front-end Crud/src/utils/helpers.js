export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    };

export const currentYear = () => {
    return new Date().getFullYear();
}

export const getMinYear = () => {
    return 1895;
}