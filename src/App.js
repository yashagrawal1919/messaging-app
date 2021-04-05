import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Sidebar from "./pages/Sidebar";
import Grid from "@material-ui/core/Grid";
import { AppBar } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Grid container spacing={0}>
            <Grid item lg={4} sm={5} xs={6}>
              <Sidebar />
            </Grid>
            <Grid item lg={8} sm={7} xs={6}>
              <Route path="/:userMobileNo" component={Chat} />
            </Grid>
          </Grid>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
