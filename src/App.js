import Route from "./route";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Route />
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  );
}

export default App;
