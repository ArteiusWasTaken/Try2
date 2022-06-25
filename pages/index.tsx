import type { NextPage } from "next";
import { CenterLayout } from "../components/layout";

import { firebase } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { Box, Button, Typography } from "@mui/material";

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
    await addDoc(collection(getFirestore(firebase.app()), "votes"), {
      vote,
    });
  };
  return (
    <CenterLayout>
      <Typography variant="h1">Piña en la pizza?</Typography>
      <Box sx={{ flexDirection: "row", display: "flex" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ fontSize: 32, marginRight: 8 }}
          onClick={() => addVoteDocument("yes")}
        >
          ✔️🍍🍕
        </Button>
        <Typography variant="h3">
          Piña Lovers:{" "}
          {votes?.docs?.filter((doc) => doc.data().vote === "yes").length}
        </Typography>
      </Box>
      <Box sx={{ flexDirection: "row", display: "flex" }}>
        <Button
          variant="contained"
          color="error"
          sx={{ fontSize: 32, marginRight: 8 }}
          onClick={() => addVoteDocument("no")}
        >
          ❌🍍🍕
        </Button>
        <Typography variant="h3">
          Piña Haters:{" "}
          {votes?.docs?.filter((doc) => doc.data().vote === "no").length}
        </Typography>
      </Box>
    </CenterLayout>
  );
};

export default Home;
