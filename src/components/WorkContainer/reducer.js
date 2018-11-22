import {
    DECREASE_WIDTH,
    INCREASE_WIDTH,
    DECREASE_HEIGHT,
    INCREASE_HEIGHT,
    DECREASE_TOP,
    INCREASE_TOP,
    DECREASE_LEFT,
    INCREASE_LEFT
} from "./actions";

const defaultState = {
    imgTop: 200,
    imgLeft: 200,
    imgWidth: 100,
    imgHeight: 100
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case DECREASE_WIDTH:
            return {
                ...state,
                imgWidth: state.imgWidth - payload
            };
        case INCREASE_WIDTH:
            return {
                ...state,
                imgWidth: state.imgWidth + payload
            };
        case DECREASE_TOP:
            return {
                ...state,
                imgTop: state.imgTop - payload
            };
        case INCREASE_TOP:
            return {
                ...state,
                imgTop: state.imgTop + payload
            };
        case DECREASE_LEFT:
            return {
                ...state,
                imgLeft: state.imgLeft - payload
            };
        case INCREASE_LEFT:
            return {
                ...state,
                imgLeft: state.imgLeft + payload
            };
        case DECREASE_HEIGHT:
            return {
                ...state,
                imgHeight: state.imgHeight - payload
            };
        case INCREASE_HEIGHT:
            return {
                ...state,
                imgHeight: state.imgHeight + payload
            };
        default:
            return state;
    }
};
