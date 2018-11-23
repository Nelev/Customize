import { SET_IMAGE } from "./actions";

const defaultState = {
    imgUrl: null,
    file: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_IMAGE:
            return {
                ...state,
                imgUrl: payload.imgUrl,
                file: payload.file
            };

        default:
            return state;
    }
};
