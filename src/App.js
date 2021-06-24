import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TrackExpenses from "./components/TrackExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <TrackExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
