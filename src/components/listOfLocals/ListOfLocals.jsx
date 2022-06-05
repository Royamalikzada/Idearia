import React, { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import {Link} from 'react-router-dom';
import './ListOfLocals.css';

export default function UpdateTime (props) {

    const [locals, setLocals] = useState();
    
    useEffect(()=>{

        // apiFetch( { path: 'http://prova.local/wp-json/wp/v2/local_business' } ).then( ( posts ) => {
        //     console.log( posts );
        // } );
        

        // fetch(`http://locals.local/wp-json/wp/v2/local_business`, {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json'} 
        // })
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
  
        fetch(`http://prova.local/wp-json/wp/v2/local_business?_embed`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'} 
        })
        .then(response => response.json())
        .then(response => setLocals(response))
        .catch(err => console.error(err));
        
    }, [])

    return (
        <div>
            <div className='row justify-content-evenly'>
                {/* {console.log(locals)} */}
                {locals && locals.map(local => {return (
                    <div className=' col-12 col-md-6 col-lg-4 mt-5' key={local.id}>
                        <div className="card text-center" style={{width: "20rem"}}>
                            <img src={local && local._embedded['wp:featuredmedia']['0'].source_url} className="card-img-top" style={{height: "13rem"}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{local.title.rendered}</h5>
                                <p className="card-text"> Phone: {local.acf.telephone}</p>
                                <p className="card-text"> Email: {local.acf.email}</p>
                                <Link to={`${local.id}`}  className="btn btn-primary">View details</Link>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}