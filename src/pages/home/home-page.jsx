import { Paper } from "@material-ui/core";
import React from "react";
import { CreatePost, Navbar, Post } from "../../components";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CreatePost />
        <Post />
        <Post />
        <Post />
      </Paper>
    </div>
  );
}

export default HomePage;
