const submitBtn = document.getElementById('btn');
const cityName = document.getElementById('cityName');

const temp = document.getElementById('temp');
const state = document.getElementById('state');

const dataHide = document.querySelector('.temp');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal == ""){
        state.innerText = `Please write the name before search`;
        dataHide.classList.add('dataHide');
    }
    else{
        try{
            url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a14f5005db8ae2daad41409ac480ed08`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            state.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            // temp.innerHTML = ((arrData[0].main.temp) - 273.15).toFixed(2);

            const temp_mood = arrData[0].weather[0].main;

            if(temp_mood == "Clouds"){
                temp.innerHTML = `${((arrData[0].main.temp) - 273.15).toFixed(2)} ${"<sup>o</sup>C"} ${"<i class= 'fa fa-cloud' style= 'color: #f1f2f6' ></i>"}`;
            }
            if (temp_mood == "sun") {
                temp.innerHTML = `${((arrData[0].main.temp) - 273.15).toFixed(2)} ${"<sup>o</sup>C"} ${"<i class= 'fa fa-sun' style= 'color: #eccc68' ></i>"}`;
            }
            if (temp_mood == "Rain") {
                temp.innerHTML = `${((arrData[0].main.temp) - 273.15).toFixed(2)} ${"<sup>o</sup>C"} ${"<i class= 'fa fa-cloud-rain' style= 'color: #f1f2f6' ></i>"}`;
            }
            if (temp_mood == "Mist" )  {
                temp.innerHTML = `${((arrData[0].main.temp) - 273.15).toFixed(2)} ${"<sup>o</sup>C"} ${"<i class= 'fa fa-smog' style= 'color: #f1f2f6' ></i>"}`;
            }
            else{
                temp.innerHTML = `${((arrData[0].main.temp) - 273.15).toFixed(2)} ${"<sup>o</sup>C"} ${"<i class= 'fa fa-cloud' style= 'color: #f1f2f6' ></i>"}`;
            }

            dataHide.classList.remove('dataHide');
        }
        catch{
            state.innerText = `Please write the name properly`;
            dataHide.classList.add('dataHide');
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);