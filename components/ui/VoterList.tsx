import { Typography, Box, Avatar } from "@mui/material";
import { doc, getFirestore } from "firebase/firestore";
import React, { ReactElement } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { app } from "../../config";

interface Props {
  id: string;
  vote: string;
}

const VoterList = ({ id, vote }: Props) => {
  const [value, loading, error] = useDocument(
    doc(getFirestore(app), `users/${id}`)
  );

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return null;
  }

  return (
    <Box className="boxsx f-box">
      <Avatar alt={value?.data()?.displayName} src={value?.data()?.photoURL} />
    </Box>
  );
};

export default VoterList;
