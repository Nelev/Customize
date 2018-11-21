import PropTypes from "prop-types";

import {
    FETCH_CAROUSEL_IMAGES_START,
    FETCH_CAROUSEL_IMAGES_SUCCESS,
    FETCH_CAROUSEL_IMAGES_ERROR
} from "./actions";

const defaultState = {
    isFetchingCarouselImages: false,
    errorFetchingCarouseImages: null,
    carouselImages: []
};

export const statePropType = {
    isFetchingCarouselImages: PropTypes.bool,
    errorFetchingCarouselImages: PropTypes.instanceOf(Error),
    carouselImages: PropTypes.array
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_CAROUSEL_IMAGES_START:
            return {
                ...state,
                isFetchingCarouselImages: true,
                errorFetchingCarouselImages: null
            };
        case FETCH_CAROUSEL_IMAGES_SUCCESS:
            return {
                ...state,
                isFetchingCarouselImages: false,
                carouselImages: payload
            };
        case FETCH_CAROUSEL_IMAGES_ERROR:
            return {
                ...state,
                isFetchingCarouselImages: false,
                errorFetchingCarouselImages: payload
            };
        default:
            return state;
    }
};
