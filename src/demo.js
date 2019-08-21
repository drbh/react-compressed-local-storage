import React from "react";
import useCompressedLocalStorageState from "react-compressed-local-storage";

export default function Counter() {
  const [count, setCount] = useCompressedLocalStorageState(
    "counter",
    999999999999999
  );
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
