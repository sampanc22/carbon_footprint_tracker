import React from "react";
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, signInWithGoogle, signOutWithGoogle } from "../firebase-config"
import { FcGoogle } from 'react-icons/fc'
import './SignInButton.css'


export default function SignInButton() {

  const [isUserSignedIn, setIsUserSignedIn] = useState("");
  
  onAuthStateChanged(auth, (user) => {
      if (user) {
          setIsUserSignedIn("sign out");
      
      }

      else {
          setIsUserSignedIn("Google");
      
      }

  })



    return (
      <button type='button' className="google_button" onClick={isUserSignedIn === "Google" ? signInWithGoogle : signOutWithGoogle}>
      <div id='button_content'>
          <div id='icon'>
              {isUserSignedIn === "Google" &&
              <FcGoogle />
              }
          </div>
          <div id='btn_text'>
              {isUserSignedIn}
          </div>
      </div>
            
  
  </button>
    )
};

