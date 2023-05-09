import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;
function PhoneList() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => console.log(error));
  }, [phones]);

  return (
    <div className="PhonesList">
      <h1>Phones</h1>
      {phones ? (
        <div>
          {phones.map((phone) => (
            <Link to={`/phones/${phone.id}`} key={phone.id}>
              <div>
                <h2>{phone.name}</h2>
                <h4>DETAILS</h4>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PhoneList;
