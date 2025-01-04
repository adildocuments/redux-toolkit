import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";

function App() {
  const { amount } = useSelector((st) => st.account);
  const { points } = useSelector((st) => st.bonus);
  return (
    <div className="m-2">
      <p className="text-2xl text-orange-400">App</p>

      <p className="text-xl text-blue-500">Current Amount : {amount}</p>
      <p className="text-xl text-blue-500">Total Bonus : {points}</p>
      <hr />
      <Account />
      <hr className="mb-4" />
      <Bonus />
      <hr className="mb-4" />
      <Reward />
      <hr />
    </div>
  );
}

export default App;
