import './Home.css';
import Top from '../components/Top';
import apiKey from '../apiKey';
import Table from '../components/Table';

import placeholderData from '../placeholderData.json';

function Error() {

  const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  let location = "Arvika";
  let timePeriod = "last7days"; // can also be "last30days" and "yeartodate"
  let unit = "metric"; // can also be us to recive farenheit insted of celcius
  const include = "&include=days%2Chours"

  async function getWeather() {
    const response = await fetch(`${baseURL}${location}/${timePeriod}?unitGroup=${unit}${include}&key=${apiKey}&contentType=json`);
    const data = await response.json();
    return data;
  }

  const chosenHour = 12;

  return (
    <article className="homePage">
      <Top title={placeholderData.address} subtitle={placeholderData.days.length + " dagar tillbaka"} />

      <Table hour={chosenHour} />
    </article>
  );
}

export default Error;