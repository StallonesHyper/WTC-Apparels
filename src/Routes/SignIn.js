import React from "react";
import { signInWithGooglePopup } from "../Utils/Firebase/Firebase.Utils";
import { createUserDocumentFromAuth } from "../Utils/Firebase/Firebase.Utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}> Google Sign In </button>
    </div>
  );
}

export default SignIn;
