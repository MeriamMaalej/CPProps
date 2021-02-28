import React from "react"; 
import { Photo, Title, Wrapper } from "./Profile/Profile"; 
import { Welcome} from "./Profile/Welcome"; 
import Img from "./me.jpg";
function myfunction(value)
{ alert(value) } 
function App() 
{ 
  return ( 
  <div> 
    <Wrapper> 
    <Photo  src={Img} /> 
    <Title style={{ color: "red" }} > Meriam Maalej </Title> 
    <Title style={{ color:"black" }} > Student </Title> 
    <Welcome alertMyInput={myfunction}/> 
    </Wrapper> 
    </div> 
    ) 
    }; 
    export default App;