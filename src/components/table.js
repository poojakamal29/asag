import React from "react";

function SimpleList(){
const list = ['a', 'b', 'c'];

const SimpleList = () => (
  <ul>
    {list.map(item => {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);
}
export default SimpleList;