import React from 'react'

function Cards({person}) {
    return (
        
        <div style={{ width: "400px", borderRadius:"50%",  border: "1px solid #ddd", color: 'blue', marginTop:'50px'}} >
<img style={{ width: "150px", borderRadius:"50%",  border: "1px solid #ddd"}}  src="/téléchargement.png" alt="myimage"   />
                 <h1> {person.name}  </h1>
               <h2>  {person.username}   </h2>
                <h3>  {person.email}   </h3>
                <h4>  {person.address.street}  </h4>
        </div>
    )
}



export default Cards
