import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrackingStart = () => {
const [isTracking, setIsTracking] = useState(false);
const [distance, setDistance] = useState(0);
const [time, setTime] = useState(0);
const [speed, setSpeed] = useState(0);
const navigate = useNavigate();

const startTracking = () => {
if (!navigator.geolocation) {
alert('Geolocation is not supported by your browser');
return;
}
setIsTracking(true);
let startTime = Date.now();
navigator.geolocation.watchPosition(
(position) => {
const newDistance = (position.coords.accuracy / 1000).toFixed(2); // Simulación básica
setDistance(newDistance);
const elapsedTime = (Date.now() - startTime) / 1000; // En segundos
setTime(elapsedTime.toFixed(1));
setSpeed((newDistance / (elapsedTime / 3600)).toFixed(2)); // km/h
},
(error) => console.error('Error getting location:', error),
{ enableHighAccuracy: true, maximumAge: 0 }
);
};

const stopTracking = () => {
setIsTracking(false);
navigate('/'); // Simulación de guardar ruta
};

return (
<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"> <h2 className="text-2xl font-bold mb-4 text-center">Start Tracking</h2> {isTracking ? ( <div> <p>Distance: {distance} km</p> <p>Time: {time} s</p> <p>Speed: {speed} km/h</p> <button onClick={stopTracking} className="w-full bg-red-500 text-white p-2 rounded-md mt-4 hover:bg-red-600" > Stop </button> </div> ) : ( <button onClick={startTracking} className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600" > Start </button> )} </div> ); };

export default TrackingStart;