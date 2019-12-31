

export const RECEIVE_GENERATE = "GENERATE";
export const RECEIVE_COLLECTIONS = "COLLECTIONS";
export const RECEIVE_ITEMS = "ITEMS";
export const RECEIVE_GENERATED = "GENERATED";

export const receiveGenerate = () => ({
  type: RECEIVE_GENERATE
});

export const receiveGenerated = () => ({
  type: RECEIVE_GENERATED
});

export const receiveCollections = () => ({
  type: RECEIVE_COLLECTIONS
});

export const receiveItems = () => ({
  type: RECEIVE_ITEMS
});
