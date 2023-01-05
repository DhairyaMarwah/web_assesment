import logo from "./logo.svg";
import Navigation from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import PostComponent from "./components/PostComponent";
import SideBar from "./components/SideBar";
function App() {
  return (
    <BrowserRouter>
      <div className="app-flex">
        <div className="column-flex">
          <PostComponent />
          <Navigation />
        </div>
        <div className="sidebar">
          <SideBar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
