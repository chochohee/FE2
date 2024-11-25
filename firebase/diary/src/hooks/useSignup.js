import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";

export const useSignup = () => {
  // 에러의 상태
  const [error, setError] = useState(null);

  // 서버와 통신중인지 판단하는 상태
  const [isPending, setIsPending] = useState(false);

  const signup = (email, password, displayName) => {
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (!user) {
          throw new Error("회원가입에 실패했습니다");
        }

        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            setIsPending(false);
            setError(null);
          })
          .catch((error) => {
            setIsPending(false);
            setError(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsPending(false);
        console.error(errorCode, errorMessage);
      });
  };

  return { error, isPending, signup };
};
