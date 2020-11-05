import axios from 'axios';

export const FetchData = async (query) => {
    try {
        const { data } = await axios.get(`https://nts-scrapper.herokuapp.com/api/v1/show/filter?tag=${query}`);
        const toModify =  data.data.filtered;
        return toModify.map((el,i) => ({
            artist: el.artist.split('\n'),
            tags: el.tags.split('\n'),
            mixcloud: el.mixcloud,
            img: el.img,
            id: i
        }))
    } catch (e) {
        return e.message;
    }
};

export const FetchSchow = async () => {
    try {
        const { data } = await axios.get(`https://nts-scrapper.herokuapp.com/api/v1/schedule`);
        return data.data.schedules;
    } catch (e) {
        return e.message;
    }
}
