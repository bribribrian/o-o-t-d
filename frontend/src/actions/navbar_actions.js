// **deprecated**
// - this is no longer needed

export const RECEIVE_NAV_GENERATE = "RECEIVE_NAV_GENERATE";
export const RECEIVE_NAV_COLLECTIONS = "RECEIVE_NAV_COLLECTIONS";
export const RECEIVE_NAV_ITEMS = "RECEIVE_NAV_ITEMS";
export const RECEIVE_NAV_GENERATED = "RECEIVE_NAV_GENERATED";

export const receiveGenerate = () => ({
  type: RECEIVE_NAV_GENERATE
});

export const receiveGenerated = () => ({
  type: RECEIVE_NAV_GENERATED
});

export const receiveCollections = () => ({
  type: RECEIVE_NAV_COLLECTIONS
});

export const receiveItems = () => ({
  type: RECEIVE_NAV_ITEMS
});
