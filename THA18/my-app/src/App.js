import List from "./component/calorie";
import "./App.css";

function App() {
  const data = [
    { name: "paneer tikka", cal: 56 },
    { name: "Egg", cal: 63 },
    { name: "fruity", cal: 34 },
    { name: "Samosha", cal: 40 },
    { name: "noodles", cal: 84 },
    { name: "pizza", cal: 97 },
    { name: "Black-forest", cal: 20 },
  ];
  return (
    <div className="container">
      <div className="calorie-list">
        <h1 className="list">Calorie-List</h1>
        <div className="cal-list">
          <List data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;