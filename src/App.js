import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import Card from "./shared/Card";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import {FeedBackProvider} from "./context/FeedBackContext"
import Post from "./components/Post";


function App() {
  return (
    <FeedBackProvider>

    <Router>
      <div>
        <Header bgColor="black" textColor="pink" />
        {/* <AboutIconLink /> */}
        <Card>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/post">Posts</NavLink>
        </Card>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList/>
                </>
              }
              ></Route>
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/post/*" element={<Post />} />
          </Routes>
        </div>
      </div>
    </Router>
    </FeedBackProvider>
  );
}

export default App;
