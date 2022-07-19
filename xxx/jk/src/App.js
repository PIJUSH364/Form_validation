import "./App.css";
import { Signup } from "./Components/Signup";
import Information from "./Components/Information";
function App() {
  return (
    <div className="container_body">
      <div className="split_box">
        <div className="section_cl info">
          <Information />
        </div>
        <div className="section_cl form_deatils">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;

// {
//   /* <div className="container mt-3">
// <div className="row">
//   <div className="col-md-5"> */
// }
