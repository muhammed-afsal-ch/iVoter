import React from 'react'
import Sidelink from './Sidelink'
import { useContext } from "react";
import { WindowContext } from "../../App";

function SideBar() {

    const { width, height } = useContext(WindowContext);



  return (
    <div style={{height:"90vh", width:width > 600 ? "10vw" : "30vw", backgroundColor:"#14213d", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <Sidelink val={"Home"}/>
        <Sidelink val={"Voters"}/>
        <Sidelink val={"Candidates"}/>
        <Sidelink val={"Votes"}/>
        <Sidelink val={"Positions"}/>
        <Sidelink val={"Functions"}/>
        <Sidelink val={"Tickets"}/>
        <Sidelink val={"Fines"}/>
        <Sidelink val={"Test"}/>
    </div>
  )
}

export default SideBar