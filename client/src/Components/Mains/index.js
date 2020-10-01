import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import "./style.css";

function Mains() {
    const fullName = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
    return (
        <div className="container-fluid">
        <Jumbotron>
            <h1>InnVenture</h1>
            <p>
                Welcome {fullName} to InnVenture, a game inspired by the Final Fantasy Series.
                Here you will battle foes found in that popular series and a boss so heinous,
                his name can not be spoken!  Are you ready for battle? If so click the button below to
                proceed to the store where you can buy equipment and items to aid you on your journey.
            </p>
            <p>
                <Button href="/store">Begin Adventure</Button>
            </p>
        </Jumbotron>
        </div>
    );
}

export default Mains;