import { getAuth, signOut } from "firebase/auth";

export default function SignOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // success
    })
    .catch((error) => {
      // error
    });
}
