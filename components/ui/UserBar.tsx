import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../config";
import { useAuthState } from "react-firebase-hooks/auth";

import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import { useWindowSize } from "../../utils";
import { useContext } from "react";
import { UIContext } from "../../context/ui";
import { UserMenu } from "./UserMenu";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const UserBar = () => {
  const { openUserMenu } = useContext(UIContext);
  const [user, loading, error] = useAuthState(firebase.auth() as any);
  const size = useWindowSize();
  return (
    <>
      {user ? (
        <>
          {size.width >= 600 ? (
            <Typography variant="h5">
              {user.displayName ? user.displayName : user.email}&nbsp;
            </Typography>
          ) : (
            ""
          )}
          <Tooltip title="Ajustes de Usuario">
            <IconButton>
              <Avatar
                id="123"
                sx={{ width: 40, height: 40 }}
                src={`${user.photoURL}`}
                onClick={openUserMenu}
              />
            </IconButton>
          </Tooltip>
          <UserMenu />
        </>
      ) : (
        ""
      )}
    </>
  );
};
