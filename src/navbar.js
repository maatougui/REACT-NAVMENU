import React from "react";
import './navmenue.css' ; 
const Navbar = props => {
  return (
    <div >
      <ul className="navbar ">
  {props.arr.map(el=><li>{el.title}</li>)}
  {el.souitem && el.souitem.map()} 
      </ul>
    </div>
  );
};

export default Navbar;
