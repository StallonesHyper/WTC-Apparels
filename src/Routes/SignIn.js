import React from "react";
import { signInWithGooglePopup } from "../Utils/Firebase/Firebase.Utils";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}> Google Sign In </button>
    </div>
  );
}

export default SignIn;
