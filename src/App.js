import PackageBooking from "./components/PackageBooking";
import Information from "./components/Information";
import "./App.css";

function App() {
  return (
    <div className="container_body">
      <div className="split_box">
        <div className="section_cl info">
          <Information />
        </div>
        <div className="section_cl form_deatils">
          <PackageBooking />
        </div>
      </div>
    </div>
  );
}

export default App;
