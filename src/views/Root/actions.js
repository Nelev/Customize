import axios from "axios";

export const FETCH_CAROUSEL_IMAGES_START = "FETCH_CAROUSEL_IMAGES_START";
export const FETCH_CAROUSEL_IMAGES_SUCCESS = "FETCH_CAROUSEL_IMAGES_SUCCESS";
export const FETCH_CAROUSEL_IMAGES_ERROR = "FETCH_CAROUSEL_IMAGES_ERROR";

export const fetchCarouselImages = invoiceId => async dispatch => {
    try {
        dispatch({ type: FETCH_CAROUSEL_IMAGES_START });
        const { data } = await axios.get(`https://picsum.photos/list`);

        dispatch({
            type: FETCH_CAROUSEL_IMAGES_SUCCESS,
            payload: data.slice(0, 20)
        });
    } catch (err) {
        dispatch({
            type: FETCH_CAROUSEL_IMAGES_ERROR,
            payload: err
        });
    }
};
