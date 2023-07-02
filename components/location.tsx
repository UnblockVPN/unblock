import { useEffect, useState } from 'react';

export const LocationComponent = ({ ipAddress, country, latitude, longitude }) => {
  return (
    <div>
      <p>Your IP Address is: {ipAddress}</p>
      <p>Your country is: {country}</p>
      <p>Your latitude is: {latitude}</p>
      <p>Your longitude is: {longitude}</p>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch('https://geolocation-db.com/json/');
    const data = await res.json();

    const ipAddress = data.IPv4;
    const country = data.country_name;
    const latitude = data.latitude;
    const longitude = data.longitude;

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
