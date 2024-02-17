//This File is created by Krishna
import AxiosInstance from "../Utils/axios/axiosConfig";

export const ArticleServices = {
    //Common API call with queryparams
    getArticles: async (queryParams) => {
        try {
            const response = await AxiosInstance.get(`/search?api-key=test${queryParams}`);
            return response.data;
        } catch (error) {
            return Promise.reject(error.message);
        }
    },

    // Get the article thumbnail and headline
    getArticlesBySearchTerm: async (searchTerm) => {
        const queryParams = `&q=${searchTerm}&show-fields=thumbnail,headline&page=1&page-size=40`;
        return ArticleServices.getArticles(queryParams);
    },
}