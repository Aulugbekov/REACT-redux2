import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, Main, UsersDetails, Users } from "../../pages";
import Header from "../header/Header";

import MyComponent from "../../pages/BackBottom";

const App = () => {
  return (
    <Router>
      <Header />
      <MyComponent />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/users">
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersDetails />} />
          <Route path="/users/info" element={<>User Info</>} />
        </Route>
        <Route path="*" element={<>404 NOT FOUND</>} />
      </Routes>
    </Router>
  );
};

export default App;
