import { useContext } from "react";
import { data } from "../App/App";

const Yeonju2 = () => {
  const { hello, bye } = useContext(data);
  console.log(hello);
  console.log(bye);
  return (
    <>
      <div>{hello}</div>
      <div>{bye}</div>
      <div>
        {hello}
        {bye}
      </div>
    </>
  );
};

export default Yeonju2;
