import React, { useCallback, useEffect } from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { auth, firebase } from "../../firebase";
const Login = () => {
  var uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/dashboard",
    tosUrl: "/terms-of-service",
    privacyPolicyUrl: "/privacy-policy",
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  };

  const loadFirebaseui = useCallback(async () => {
    const firebaseui = await import("firebaseui");
    const firebaseUi =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    firebaseUi.start("#firebaseui-auth-container", uiConfig);
  }, [firebase, uiConfig]);

  useEffect(() => {
    loadFirebaseui();
  }, []);

  return <div id="firebaseui-auth-container"></div>;
};

export default Login;
