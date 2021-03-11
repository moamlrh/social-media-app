import { Paper } from "@material-ui/core";
import "./App.css";
import { Navbar, Post } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Paper style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Post />
        <Post />
        <Post />
      </Paper>
    </div>
  );
}

export default App;
