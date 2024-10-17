import { Container } from "@mui/material"
import { NavBars } from "./navbar"
import { Outlet } from "react-router-dom"
import {Topbar} from "./topbar"
import Quation from "./quation"


export const Layout=()=>{
    return(
       
            
      
        <div>
        <Topbar/>
        
        <div style={{display:'flex'}}>
          
            <NavBars />  
            <Container style={{padding:'0',margin:'0',backgroundColor:'#E4E8EE'}}><div style={{display:'inline'}}><Quation /></div>
                <Outlet/>
            </Container>
        </div></div>
    )
}