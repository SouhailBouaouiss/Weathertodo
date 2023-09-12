const cities = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { name: "Sydney", lat: -33.8651, lng: 151.2099 },
  { name: "Rome", lat: 41.9028, lng: 12.4964 },
  { name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Rabat", lat: 34.0209, lng: -6.8416 },
];

// Creat a function that select a city from cities randomlly

const pickCityRandom = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  if (typeof arr == "object" && arr.indexOf(arr[index]) != -1) {
    return arr[index].name;
  } else {
    return "There is a problem with the received city properties";
  }
};

// Fetch the data from API

const fetchCityData = async (cityName) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=d18e304704a44a208db102705232908&q=${cityName}&aqi=n`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get temperature from data
const getTemperature = (data) => {
  if (
    typeof data == "object" &&
    data.location &&
    data.location.name &&
    data.current &&
    data.current.feelslike_c
  ) {
    return `Temperature in ${data.location.name} is ${data.current.feelslike_c}C°.`;
  } else {
    return "There is a problem with the received data";
  }
};

// Get data for a specific city

const getCityData = () => {
  try {
    fetchCityData(pickCityRandom(cities)).then((data) => {
      console.log(getTemperature(data));
    });
  } catch (error) {
    console.warn(error);
  }
};

getCityData();
