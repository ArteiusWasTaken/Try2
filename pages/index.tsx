import type { NextPage } from "next";
import { CenterLayout } from "../components/layout";

import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { db, firebaseConfig } from "../config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import { Box, Button, Typography } from "@mui/material";
import { Authorization } from "../components/auth";
import VoterList from "../components/ui/VoterList";

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(firebase.auth() as any);
  console.log("Loading:", loading, "|", "Current user:", user);

  const [votes, votesLoading, votesError] = useCollection(
    collection(getFirestore(firebase.app()), "votes")
  );
  if (!votesLoading && votes) {
    votes.docs.map((doc) => console.log(doc.data()));
  }
  const addVoteDocument = async (vote: string) => {
    const citiesRef = collection(db, "votes");
    await setDoc(doc(citiesRef, user?.uid), { vote });
  };

  return (
    <CenterLayout>
      {loading && <Typography variant="h4">Loading...</Typography>}
      {!user && <Authorization />}
      {user && (
        <>
          <Typography variant="h1">Piña en la pizza?</Typography>
          <Box className="boxsx f-box">
            <Button
              variant="contained"
              color="success"
              sx={{ fontSize: 32, marginRight: { sm: 8, xs: 0 } }}
              onClick={() => addVoteDocument("yes")}
            >
              ✔️🍍🍕
            </Button>
            <Typography variant="h3">
              Piña Lovers:{" "}
              {votes?.docs?.filter((doc) => doc.data().vote === "yes").length}
            </Typography>
          </Box>
          <Box className="boxsx f-box">
            <Button
              variant="contained"
              color="error"
              sx={{ fontSize: 32, marginRight: { sm: 8, xs: 0 } }}
              onClick={() => addVoteDocument("no")}
            >
              ❌🍍🍕
            </Button>
            <Typography variant="h3">
              Piña Haters:{" "}
              {votes?.docs?.filter((doc) => doc.data().vote === "no").length}
            </Typography>
          </Box>
          <Box className="boxsx f-box" sx={{ mt: "64px" }}>
            <Typography variant="h3">Votantes:</Typography>
            <Box
              className="boxsx f-box"
              sx={{ maxHeight: "320px", overflowY: "auto", width: "240px" }}
            >
              {votes?.docs?.map((doc) => (
                <>
                  <VoterList id={doc.id} key={doc.id} vote={doc.data().vote} />
                </>
              ))}
            </Box>
          </Box>
        </>
      )}
    </CenterLayout>
  );
};

export default Home;
