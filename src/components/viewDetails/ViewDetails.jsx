import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewDetails() {

    const {id} = useParams();

    const [details, setDetails] = useState();

    useEffect( () => {
        fetch(`http://prova.local/wp-json/wp/v2/local_business/${id}?_embed`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'} 
        })
        .then(response => response.json())
        .then(response => setDetails(response))
        .catch(err => console.error(err));
    }, []) 

    return (
        <div>
            {/* {console.log(details)}   */}
            {details && 
              <div className='mt-5 p-5 border border-4 rounded-3 border-warning'>
                  <div className='text-center'>
                    <img src={ details._embedded['wp:featuredmedia']['0'].source_url} style={{width:"30rem", height:"20rem"} } className="p-2" alt="logo"/>
                    <h2>{details.title.rendered }</h2>
                  </div>
                <p> <span className='fw-bold fs-4'> Information: </span> { details.acf.description }</p>
                <p> <span className='fw-bold fs-4'> Email: </span> { details.acf.email }</p>
                <p> <span className='fw-bold fs-4'> Telephone: </span> +39 { details.acf.telephone }</p>
                <p> <span className='fw-bold fs-4'> Opening hours: </span> {details.acf.time }</p>
                <Link className='btn btn-primary' to={`/${details.id}/edit`}>Change the opening hours</Link>
                <br />
                <Link className='btn btn-warning mt-2' to='/'>Go back</Link>

              </div>
            }
        </div>
    )
}