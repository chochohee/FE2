import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { sale, soldout } from "../modules/stockReducer.js";

export default function StockState() {
  const { message } = useSelector(
    (state) => ({
      message: state.stockReducer.message,
    }),
    shallowEqual
  );

  const { stock } = useSelector(
    (state) => ({
      stock: state.goodsReducer.stock,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (stock <= 0) {
      dispatch(soldout());
    } else {
      dispatch(sale());
    }
  }, [stock]);

  return <strong>{message}</strong>;
}
