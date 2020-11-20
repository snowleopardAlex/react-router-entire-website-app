import React from "react";
import { useParams, useHistory } from "react-router-dom";
import servicesData from "./servicesData";

function ServicesDetail(props) {
    const {serviceId} = useParams()
    // AJAX call to get the info about the specified service - usually
    // I do differently because I don't have a database here, I import servicesData
    const foundService = servicesData.find(service => service._id === serviceId)

    const history = useHistory()

    // used with useHistory hook that let us come back to the previous page
    function handleClick() {
       console.log("Submitting...")
       setTimeout(() => {
           history.push("/services")
       }, 2000)
    }

    return (
        <div>
           <h1>Service Detail Page</h1>
           <h3>{foundService.name} - ${foundService.price}</h3>
           <p>{foundService.description}</p>
           <button onClick={handleClick}>Go back to all services</button>
        </div>
    );
}

export default ServicesDetail;