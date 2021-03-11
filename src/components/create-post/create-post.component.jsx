import { IconButton, TextField } from "@material-ui/core";
import { SendOutlined, Image } from "@material-ui/icons";
import React, { useRef, useState } from "react";

export function CreatePost() {
  const fileInput = useRef();
  const [url, setUrl] = useState("");
  const uploadImageClicked = () => {
    fileInput.current.click();
  };
  const handleChangeFile = (e) => {
    let img = e.target.files[0];
    setUrl((window.URL || window.webkitURL).createObjectURL(img));
  };
  return (
    <div
      className="create-new-post"
      style={{ margin: "20px auto", width: "400px", position: "relative" }}
    >
      <TextField
        label="What's happen tody ?"
        multiline
        fullWidth
        rows={4}
        variant="outlined"
      />
      <IconButton
        color="primary"
        style={{ position: "absolute", bottom: "10px", right: "5px" }}
      >
        <SendOutlined />
      </IconButton>
      <IconButton
        style={{ position: "absolute", bottom: "10px", right: "45px" }}
        onClick={uploadImageClicked}
      >
        <Image />
      </IconButton>
      {url && (
        <div className="img" style={{maxWidth:'400px', height:'250px', margin:'15px auto'}}>
          <img src={url} alt="this is post media" width='100%' height="100%"/>
        </div>
      )}
      <input
        ref={fileInput}
        onChange={handleChangeFile}
        type="file"
        name="file-input"
        id="file-input"
        hidden
      />
    </div>
  );
}
