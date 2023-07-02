import { useState } from 'react';

export default function LocationComponent({ ipAddress, country, latitude, longitude }) {
  console.log('ipAddress:', ipAddress);
  console.log('country:', country);
  console.log('latitude:', latitude);
  console.log('longitude:', longitude);

  return (
    <div>
      <p>Your IP Address is: {ipAddress}</p>
      <p>Your country is: {country}</p>
      <p>Your latitude is: {latitude}</p>
      <p>Your longitude is: {longitude}</p>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://geolocation-db.com/json/');
    const data = await res.json();

    const ipAddress = data.IPv4;
    const country = data.country_name;
    const latitude = data.latitude;
    const longitude = data.longitude;

    console.log('Fetched data:', data);

    return {
      props: {
        ipAddress,
        country,
        latitude,
        longitude,
      },
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: {
        ipAddress: '',
        country: '',
        latitude: '',
        longitude: '',
      },
    };
  }
}
