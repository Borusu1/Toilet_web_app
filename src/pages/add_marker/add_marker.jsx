import React, { useState } from 'react';
import axios from 'axios';

const add_marker_page = () => {
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [addName, setName] = useState('');
  const [addCoords, setCoords] = useState('');

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Якщо чекбокс вибраний, додаємо його значення до масиву
      setCheckboxValues([...checkboxValues, value]);
    } else {
      // Якщо чекбокс знятий, видаляємо його значення з масиву
      setCheckboxValues(checkboxValues.filter(item => item !== value));
    }

  };

  const handleInputChange_Name = (event) => {
    setName(event.target.value);
  };

  const handleInputChange_Coords = (event) => {
    setCoords(event.target.value);
  };


  const addMarker = (event) => {
    const authorization = 'Bearer ' + window.localStorage.getItem('jsonwebtoken')

    let data = JSON.stringify({
      "name": addName,
      "coordinates": addCoords,
      "tags": checkboxValues
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/api/v1/markers/create',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorization
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (

    <>
      <div>
        <label>
          <input type="checkbox" value="CAFFE" onChange={handleCheckboxChange} />
          CAFFE
        </label><br />
        <label>
          <input type="checkbox" value="SUPERMARKET" onChange={handleCheckboxChange} />
          SUPERMARKET
        </label><br />
        <label>
          <input type="checkbox" value="RESTAURANT" onChange={handleCheckboxChange} />
          RESTAURANT
        </label><br />
        <label>
          <input type="checkbox" value="PUBLIC" onChange={handleCheckboxChange} />
          PUBLIC
        </label><br />
        <label>
          <input type="checkbox" value="FREE" onChange={handleCheckboxChange} />
          FREE
        </label><br />
        <label>
          <input type="checkbox" value="PAID" onChange={handleCheckboxChange} />
          PAID
        </label><br />
        <label>
          <input type="checkbox" value="STORE" onChange={handleCheckboxChange} />
          STORE
        </label><br />
        <h3>Ви вибрали:</h3>
        <ul>
          {checkboxValues.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={addName}
        onChange={handleInputChange_Name}
        placeholder="Введіть ім'я..."
      />
      <input
        type="text"
        value={addCoords}
        onChange={handleInputChange_Coords}
        placeholder="Введіть координати..."
      />
      <button onClick={addMarker}>Send marker</button>
    </>
  )
}

export default add_marker_page
