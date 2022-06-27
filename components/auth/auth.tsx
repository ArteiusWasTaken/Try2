import type { NextPage } from "next";
import React, { useCallback, useEffect } from "react";
import { BaseLayout } from "../layout";
import { Box, Typography } from "@mui/material";
import "firebaseui/dist/firebaseui.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { db, firebaseConfig } from "../../config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const Authorization: NextPage = () => {
  var uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    tosUrl: "/terms-of-service",
    privacyPolicyUrl: "/privacy-policy",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
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
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1">PiñaLogin</Typography>
        <Typography variant="h3">Ingresa con tu cuenta</Typography>
      </Box>
      <div id="firebaseui-auth-container"></div>
    </BaseLayout>
  );
};
