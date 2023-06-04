import { Button } from "@mui/material";
import React from "react";

const NotFoundPage = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div style={{ padding: "10% 20%" }}>
        <h2 style={{ fontSize: "128px", fontFamily: "monospace" }}>404</h2>
        <h3 style={{ fontSize: "38px", marginBottom: "5%" }}>
          UH OH! You are lost.
        </h3>
        <p style={{ fontSize: "24px", marginBottom: "5%" }}>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <a href="/">
          <Button style={{ border: "2px solid green", color: "green" }}>
            Go to mainpage
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
