import React, { useState, useEffect } from 'react';

export default function UpdateTime (props) {

    const [post, setPost] = useState();
    
    useEffect(()=>{

        fetch(`http://try.local/wp-json/wp/v2/local_business`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'} 
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  
        // fetch(`http://prova.local/wp-json/wp/v2/local_business`, {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json'} 
        // })
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
        
    }, [])

    return (
        <div>
            {/* {console.log(setPost)} */}
        </div>
    )
}