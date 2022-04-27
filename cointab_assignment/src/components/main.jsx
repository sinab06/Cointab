import React, { useEffect, useState } from "react";
import "./main.css"


export const Main = () => {

  const [items, setItems] = useState([]);

  function getCode() {
    fetch("http://localhost:3000/PinCode")
      .then((data) => data.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }

  function getZone() {
    fetch("http://localhost:3000/zoneid")
      .then((data) => data.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getCode();
    getZone();
  }, []);



  return (
    <div>
      <div className="container">
        {/* {items.map((e) => ( */}
          {/* <> */}
            <div className="boxes">
              <h2>Weight</h2>
              <input className="input_div" type="text" />
            </div>

            <div className="boxes">
              <h2>PinCode</h2>
              <input className="input_div" type="text"  />
            </div>

            <div className="boxes">
              <h2>Delivery Type</h2>
              <select className="input_div" name="" id="">
                <option value="forward">Forward</option>
                <option value="rto">Forward & RTO</option>
              </select>
            </div>

            <div>
              <button> Submit </button>
              </div>
          {/* </> */}


        {/* ))} */}






      </div>
    </div>
  )
}