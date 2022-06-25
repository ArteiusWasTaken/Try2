import type { NextPage } from "next";
import React, { useCallback, useEffect } from "react";
import { BaseLayout } from "../components/layout";

import "firebaseui/dist/firebaseui.css";
import { firebase } from "../firebase";

const Home: NextPage = () => {
  var uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    tosUrl: "/terms-of-service",
    privacyPolicyUrl: "/privacy-policy",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
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
  return (
    <BaseLayout>
      <div id="firebaseui-auth-container"></div>
    </BaseLayout>
  );
};

export default Home;
