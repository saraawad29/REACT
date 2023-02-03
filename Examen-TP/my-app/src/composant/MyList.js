import React from "react";
// import MyForm from "./MyForm";
import './style.css';

const MyList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          <p>{item.name}</p> 
          <p>{item.age}</p>
        </li>
      ))}
    </ul>
  );
}
export default MyList;


// function MyList() {
//   return (
//   <div>

//   </div>
//   );
// }

