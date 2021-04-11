import React,{useState } from "react";
import {Navbar, Nav , FormControl, Form, Button} from 'react-bootstrap'
import Add from './Add';
import Data from './Data';
import { Route} from 'react-router-dom';



function Menu({search, setSearch}) {
  const handlechange = (e) => {
    setSearch(e.target.value);
  }
  const [newMovie, setNewMovie] = React.useState(
    {  title:"",
      description:"",
      Image:"",
      rate:"",}
    )
    const AddMovie = (newMovie) =>{
      setMovies(
        [...movies, newMovie]
      )
    }
     const [movies , setMovies] = React.useState(Data)
console.log(Add)
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Turque series</Navbar.Brand>
        <Nav className="mr-auto">
        <Route exact path="/" render={()=>  <Nav.Link href="/">Home</Nav.Link>}/>
          <Nav.Link href="#features">Last episode</Nav.Link>
        </Nav>
        <Form inline>
        {/* <Add AddMovie={AddMovie} newMovie={newMovie} setNewMovie={setNewMovie}/> */}
        <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={handlechange}/>
        <Button variant="outline-primary">Add</Button>
   
     
          
          {/* <Button variant="outline-primary">Search</Button> */}
        </Form>
      </Navbar>
    </div>
  );
}

export default Menu;
