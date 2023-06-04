<<<<<<< HEAD
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Forum = () => {
  return (
    <>
        <h1>Forum</h1>
        

    </>
  )
}

export default Forum
=======
import { Skeleton } from "@mui/material";
import React from "react";

const Forum = () => {
  return (
    <div className="forumContainer">
      <Skeleton variant="rounded" width={600} height={60} />
    </div>
  );
};

export default Forum;
>>>>>>> 581854fa1dcd04e466aaacc2288f61b84135e7dc
