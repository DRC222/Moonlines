import "./App.css";
import Map from "./Components/Map";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RouteDetails from "./Components/RouteDetails";
import { routes } from "./Routes"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Map />}>
          </Route>
          <Route exact path="/routes/:id" element={<RouteDetails routes={routes}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//<Route path='/route' component={RouteDetails}/>
