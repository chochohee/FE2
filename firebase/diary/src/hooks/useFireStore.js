import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useReducer } from "react";
import { appFireStore, timeStamp } from "../firebase/config";
const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
      };
    case "isPending":
      return { isPending: true, document: null, error: null, success: false };
    case "error":
      return {
        isPending: false,
        document: null,
        error: action.payload,
        success: false,
      };
    case "deleteDoc":
      return { isPending: false, document: null, success: true, error: null };
    default:
      return state;
  }
};

export const useFireStore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  const colRef = collection(appFireStore, transaction);

  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };

  // 컬렉션에서 문서를 제거합니다.
  const deleteDocument = async (id) => {
    dispatch({ type: "isPending" });
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: "deleteDoc", payload: docRef });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  return { addDocument, deleteDocument, response };
};
