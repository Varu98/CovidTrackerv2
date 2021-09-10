const input = document.querySelector("#inputtext");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const tableInput = document.querySelectorAll(".tableInput");

const getTranslatedText = async (e) => {
  const inputValue = input.value;
  const url = "https://covid-19-data.p.rapidapi.com/country?name=" + inputValue;

  e.preventDefault();
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "f810edfee8msh45209c7d77b9b58p190970jsn9a9984832531"
    }
  });
  const data = await response.json();
  const entries = data[0];

  let entryData = Object.entries(entries);

  let onlyData = entryData.map((each) => {
    return (each = each[1]);
  });

  for (let i = 0; i < tableInput.length; i++) {
    tableInput[i].innerHTML = onlyData[i];
  }
};

btn.addEventListener("click", getTranslatedText);
