import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"

function About() {
    return<div><h1>Strona boczna</h1>
    <Link to='/'>Przejdz do strony glownej</Link>
    </div>
}

export default About