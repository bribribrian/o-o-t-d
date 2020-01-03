

export const RECEIVE_PICK_HAT = "RECEIVE_PICK_HAT";
export const RECEIVE_PICK_TOP = "RECEIVE_PICK_TOP";
export const RECEIVE_PICK_BOTTOM = "RECEIVE_PICK_BOTTOM";
export const RECEIVE_PICK_SHOES = "RECEIVE_PICK_SHOES";
export const RECEIVE_PICK_NONE = 'RECEIVE_PICK_NONE';

export const receivePickNone = () => ({
  type: RECEIVE_PICK_NONE
});

export const receivePickHat = () => ({
  type: RECEIVE_PICK_HAT
});

export const receivePickTop = () => ({
  type: RECEIVE_PICK_TOP
});

export const receivePickBottom = () => ({
  type: RECEIVE_PICK_BOTTOM
});

export const receivePickShoes = () => ({
  type: RECEIVE_PICK_SHOES
});

