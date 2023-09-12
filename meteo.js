const searchBtn = document.querySelector("button[type=search]");
const searchInput = document.querySelector("input[type=search]");
const sectionHtml = document.querySelector("section");

const handleBtnClick = () => {
  // Stock the input value in a variable
  var inputValue = searchInput.value;
  // Avoid pushing an empty string as a inputValue
  if (inputValue.length < 2) {
    alert("Invalid city name!");
  } else {
    fetchApiData(inputValue).then((data) => {
      pushDataIntoDom(data);
    });
  }
};
searchBtn.addEventListener("click", handleBtnClick);

// Get Data from an API URL

const fetchApiData = async (cityName) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=d18e304704a44a208db102705232908&q=${cityName}&aqi=n`
  );

  const data = await response.json();
  return data;
};

// // Push the data into the Dom

const pushDataIntoDom = (citydata) => {
  sectionHtml.innerHTML = "";
  sectionHtml.innerHTML = pushDataIntoHtml(citydata);
};

const pushDataIntoHtml = (cityName) => {
  return `<h3 class="text-center text-uppercase">${cityName.location.name}</h3>
    <p class="text-center text-secondary">${cityName.current.condition.text}</p>
    <div class="text-center">
    <img src="${cityName.current.condition.icon}" alt="">
    </div>
    <h1 class="text-center">${cityName.current.feelslike_c}C</h1>
    <div class="row row-cols-2">
      <div
        class="border-end border-black d-flex flex-column justify-content-end text-end"
      >
        <span>humidity</span>
        <span>${cityName.current.humidity}</span>
      </div>
      <div class="border-end border-white d-flex flex-column">
        <span>Wind Speed</span>
        <span>${cityName.current.wind_mph}</span>
      </div>
    </div>`;
};
