export const sale = () => {
  return { type: "SALE" };
};

export const soldout = () => {
  return { type: "SOLD_OUT" };
};

const initalState = {
  message: "판매중!!",
};

const stockReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SALE":
      return {
        ...state,
        message: "판매중",
      };
    case "SOLD_OUT":
      return {
        ...state,
        message: "완판!!",
      };
    default:
      return state;
  }
};

export default stockReducer;
