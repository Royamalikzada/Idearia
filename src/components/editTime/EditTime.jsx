import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiFetch from '@wordpress/api-fetch';


export default function EditTime () {

    const {detailsId} = useParams();
    const [details, setDetails] = useState();
    const [hour, setHour] = useState();

    useEffect( () => {
        fetch(`http://prova.local/wp-json/wp/v2/local_business/${detailsId}?_embed`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'} 
        })
        .then(response => response.json())
        .then(response => setDetails(response))
        .catch(err => console.error(err));

    }, []) 

    const handleChange = (e) => {
        setHour(e.target.value);
    }

    const handleSubmit = (e) => {
            
            apiFetch( {
                path: `http://prova.local/wp-json/wp/v2/local_business/${detailsId}`,
                method: 'POST',
                headers: { 
                    'Authorization': 'Basic '+btoa('username:password'),
                    'Content-Type': 'application/json'},
                data: { 
                    "acf": {
                        "time": hour
                    }
                },
            } ).then( ( res ) => {
                console.log( res );
            } );

            console.log(hour);

       
            // fetch(`http://prova.local/wp-json/wp/v2/local_business/${detailsId}`, {
            //     method: 'POST',
            //     data: {
            //         "acf": {
            //             "time": "hello",
            //           }
            //     }
            //     // headers: { 'Content-Type': 'application/json'} 
            // })
            // .then(response => console(response))
            // .catch(err => console.error(err));

         
    }

    return (
        <div>
            <div className='mt-5'>

                <p className='fw-bold'>Current opening hours</p>
                <p className='form-control mb-5 bg-light'>{details && details.acf.time}</p>
                <form onSubmit={(e) => handleSubmit(e)} >
                        <label htmlFor="time" className='form-label fw-bold'>Update the opening hours</label>
                        <input type="text" className='form-control mb-3' onChange={(e) => handleChange(e)}/>
                        <button className='btn btn-primary'>Submit changes</button>
                </form>
                <Link className='btn btn-warning mt-2' to={`/${detailsId}`}>Go back</Link>
            </div>
        </div>
    )
}