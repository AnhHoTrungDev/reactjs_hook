import React, { useState, useCallback, memo } from "react";

const App = () => {
  console.log("app");
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Wrap />
    </>
  );
};

const Wrap = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  console.log("render wrap ");
  // const [isChecked2, setIsChecked2] = React.useState(false);
  // use useCallback ở đây thì wrap sẽ không render nếu  isChecked không  thay đổi
  const toggleChecked = useCallback(() => {
      console.log("render wrap ");
    return setIsChecked(!isChecked);
  }, [isChecked]);

  return <Checkbox value={isChecked} onClick={toggleChecked} />;
};

const Checkbox = memo(({ value, onClick }) => {
  console.log("Checkbox is renderd!");
  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      {value ? "☑" : "□"}
    </div>
  );
});
export default App;
