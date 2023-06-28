import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./HomeScreen";
import ReviewComponent from "./ReviewWritingScreen";
import DetailComponent from "./DetailScreen";
import SearchComponent from "./SearchLandingScreen";
import Login from "./yelp/login";
import Signup from "./yelp/signup";
import Profile from "./yelp/profile";
import EditProfile from "./yelp/profile/edit-profile";
import AdminPage from "./yelp/profile/admin-home.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/review" element={<ReviewComponent />} />
            <Route
              path="/review/:businessName/:businessId"
              element={<ReviewComponent />}
            />
            <Route path="/search" element={<SearchComponent />} />
            <Route path="/detail/:businessId" element={<DetailComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/profile/:username/edit" element={<EditProfile />} />
            <Route path="/profile/:username/*" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
