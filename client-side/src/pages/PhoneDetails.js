import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL;

function PhoneDetails() {
 
  const [ phone, setPhone ] = useState()
  const { id } = useParams();
   useEffect(() => {
      axios.get(`${API_URL}/api/phones/${id}`)
      .then((response) => setPhone(response.data))
       .catch((error) => console.log(error));
   }, [id]);

  return (
    <div>
    {phone?
    <>
       <h1>{phone.name}</h1>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Description:{phone.description}</p>
      <p>Color: {phone.color}</p>
      <p>Price: {phone.price}</p> 
      <p>Screen Size: {phone.screenSize}</p>
      <p>RAM: {phone.ram}</p>
      <p>Processor: {phone.processor}</p> 
      </>
    : <p>Loading...</p>}
    </div>
  )
}

export default PhoneDetails;
