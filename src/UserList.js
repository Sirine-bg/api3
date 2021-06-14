import React, { useEffect, useState } from "react";
import Cards from './Cards';
import axios from 'axios';
const UserList= () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
     
        axios
        .get("https://jsonplaceholder.typicode.com/users")
          .then(res => {console.log(res)
            setPersons(res.data)})
          .catch(err=>{console.log(err)})
    }, []);




    return (
        <div style ={{margin: "40px", marginTop: '10px',marginBottom: '10px', paddingTop:'40px' ,display: "flex", flexWrap : "wrap",  justifyContent:"space-between"}}>
         

         {persons.map(person =>(
           <Cards person={person} key={person.id}/>

           ))}
        </div>
    );
};
export default UserList;
