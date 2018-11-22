export const DECREASE_WIDTH = "DECREASE_WIDTH";
export const INCREASE_WIDTH = "INCREASE_WIDTH";

export const DECREASE_HEIGHT = "DECREASE_HEIGHT";
export const INCREASE_HEIGHT = "INCREASE_HEIGHT";

export const DECREASE_TOP = "DECREASE_TOP";
export const INCREASE_TOP = "INCREASE_TOP";

export const DECREASE_LEFT = "DECREASE_LEFT";
export const INCREASE_LEFT = "INCREASE_LEFT";

export const SPACING_UNIT = 40;

export const decreaseWidth = () => ({
    type: DECREASE_WIDTH,
    payload: SPACING_UNIT
});

export const increaseWidth = () => ({
    type: INCREASE_WIDTH,
    payload: SPACING_UNIT
});

export const decreaseHeight = () => ({
    type: DECREASE_HEIGHT,
    payload: SPACING_UNIT
});

export const increaseHeight = () => ({
    type: INCREASE_HEIGHT,
    payload: SPACING_UNIT
});

export const decreaseTop = () => ({
    type: DECREASE_TOP,
    payload: SPACING_UNIT
});

export const increaseTop = () => ({
    type: INCREASE_TOP,
    payload: SPACING_UNIT
});

export const decreaseLeft = () => ({
    type: DECREASE_LEFT,
    payload: SPACING_UNIT
});

export const increaseLeft = () => ({
    type: INCREASE_LEFT,
    payload: SPACING_UNIT
});
