import React from 'react';
import './TravelAlerts.css';

const TravelAlert = ({ weather }) => {
  let alertMessage = '';

  if (weather.humidity > 80) {
    alertMessage = 'It is raining. Travel is not recommended.';
  } else if (weather.temp < 25) {
    alertMessage = 'It is very cold. Be cautious if you must travel.';
  } else if (weather.temp > 35) {
    alertMessage = 'It is extremely hot. Stay hydrated and avoid unnecessary travel.';
  } else {
    alertMessage = 'Weather is fine for traveling.';
  }

  return (
    <div className='alertbox'>
    <div className= {`alert ${alertMessage !== 'Weather is fine for traveling.' ? 'alert-danger' : 'alert-safe'}`}>
      {alertMessage}
    </div>
    </div>

  );
};

export default TravelAlert;
