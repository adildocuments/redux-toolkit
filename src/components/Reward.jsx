import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/reward";

const Reward = () => {
  const { points } = useSelector((st) => st.reward);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h1 className="text-2xl text-orange-500">Reward Component</h1>
      <p className="text-xl text-blue-500">Total Points: {points}</p>
      <button
        className="border p-2 bg-gray-300 me-2 rounded-md my-3"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment +
      </button>

      <button
        className="border p-2 bg-gray-300 me-2 rounded-md my-3"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement -
      </button>
    </div>
  );
};

export default Reward;
