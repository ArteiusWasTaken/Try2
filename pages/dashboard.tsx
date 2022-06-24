import { firebase } from "../firebase/firebaseApp";
// Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth() as any);
  console.log("Loading:", loading, "|", "Current user:", user);

  return <div>Hello!</div>;
}
