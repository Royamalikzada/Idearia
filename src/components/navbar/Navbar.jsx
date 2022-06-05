import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <div>
            <nav className="navbar navbar-dark bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                    <img src="idearia_logo.png" alt="" width="150" height="100" className="d-inline-block align-text-top"/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}