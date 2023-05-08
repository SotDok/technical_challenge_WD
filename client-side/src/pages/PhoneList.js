import { useState, useEffect } from "react";
import axios from "axios"
import PhoneDetails from "./PhoneDetails";

const API_URL = process.env.REACT_APP_API_URL;
function PhoneList(){
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/phones`)
    .then((response) => {
      console.log(response.data);
      setPhones(response.data);
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <div className = "PhonesList">
      { phones.map((phone) => <PhoneDetails key={phone._id} {...phone} />)}
    </div>
  )
}

export default PhoneList;