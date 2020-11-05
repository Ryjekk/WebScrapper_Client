import axios from 'axios';

export const FetchData = async (query) => {
    try {
        const { data } = await axios.get(`https://nts-scrapper.herokuapp.com/api/v1/show/filter?tag=${query}`);
        return data.data.filtered;
    } catch (e) {
        return e.message;
    }
};
