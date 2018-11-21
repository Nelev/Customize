export const SET_IMAGE = "SET_IMAGE";

export const setImage = (imgUrl, file) => ({
    type: SET_IMAGE,
    payload: { imgUrl: imgUrl, file: file }
});
