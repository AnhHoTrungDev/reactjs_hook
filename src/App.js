import React, {useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (countRef.current === 10) return clearInterval(intervalId);
      countRef.current = countRef.current + 1;
      setCount(countRef.current);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>The count is: {count}</div>;
}
export default App;
