import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./pages/home/home-page";
import LoginPage from "./pages/login/login-page";
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HomePage /> */}
        <LoginPage />
      </div>
    </Provider>
  );
}

export default App;
