import React from "react";
import Button from 'react-bootstrap/Button';

function Body()
{
    return(
        <div>
            <div style={{height:'700px',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h1 style={{textTransform:'uppercase',color:'black',fontSize:'5rem',fontWeight:'800'}}>Welcome <br />to <br />Bookstore!!!</h1>
            <img style={{marginLeft:'450px',height:'370px'}} src="./book-stack.png" alt="" />
        </div>
        <div style={{paddingBottom:'70px',marginLeft:'200px',position:'relative',bottom:'100px'}}>
        <a href="/books"><Button  size="lg" variant="dark">Get Books</Button></a>
        </div>
        </div>
    )
}

export default Body;