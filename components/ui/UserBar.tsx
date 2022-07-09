import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { db, firebaseConfig } from "../../config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, IconButton, Typography } from "@mui/material";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const UserBar = () => {
  const [user, loading, error] = useAuthState(firebase.auth() as any);

  return (
    <>
      {user ? (
        <>
          <Typography variant="h5">
            {user.displayName ? user.displayName : user.email}&nbsp;
          </Typography>
          <IconButton>
            <Avatar sx={{ width: 50, height: 50 }} src={`${user.photoURL}`} />
          </IconButton>
        </>
      ) : (
        ""
      )}
    </>
  );
};
