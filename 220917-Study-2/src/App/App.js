import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [key, setKey] = useState(6);
  const click = (test) => {
    setNumber(number + test);
  };

  const add = () => {
    let newList = data.concat(key);
    console.log(newList);
    setData(newList);
    setKey(key + 1);
  };

  const remove = (number) => {
    let filterList = data.filter((value) => value !== number);
    console.log(filterList);
    setData(filterList);
  };

  let list = data.map((value) => (
    <div key={value} onClick={() => remove(value)}>
      {value}
    </div>
  ));
  console.log(list);

  return (
    <>
      <div>{number}</div>
      <button onClick={() => click(5)}>버튼</button>
      <button onClick={add}>추가</button>
      {list}
    </>
  );
}

export { App };
