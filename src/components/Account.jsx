import { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/accountSlice";
import { useDispatch, useSelector } from "react-redux";

const Account = () => {
  const [value, setValue] = useState(0);
  const { amount } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h1 className="mt-3 text-2xl text-orange-500">Account Component</h1>
      <div className="my-4">
        <p className="text-xl text-blue-500 mb-3">Amount:$ {amount}</p>
        <button
          className="border p-2 bg-gray-300 me-2 rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment +{" "}
        </button>
        <button
          className="border p-2 bg-gray-300 me-2 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement -{" "}
        </button>
        <input
          type="number"
          placeholder="Enter Amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border-spacing-1 border-2 border-black p-2 mx-2 border-r-2 bg-gray-200 rounded-md"
        />
        {/* {account.error ? <h1>{account.error}</h1> : ""} */}
        <button
          className="border p-2 bg-gray-300 me-2 rounded-md "
          onClick={() => dispatch(incrementByAmount(value))}
        >
          Increment By Amount
        </button>

        <button
          className="border p-2 bg-gray-300 me-2 rounded-md "
          //   onClick={() => dispatch(decrementByAmount(value))}
        >
          Decrement By Amount
        </button>
        <button
          className="border p-2 bg-gray-300 me-2 rounded-md "
          //   onClick={() => dispatch(getUserAccount(1))}
        >
          Init User
        </button>
      </div>
    </div>
  );
};

export default Account;
