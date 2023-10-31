import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
          params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
              units: 'imperial',
          },
          headers: {
            "x-rapidapi-key":
              "9857b77bd7mshab34561b3130b93p1562dejsn9c560629a9fd",
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          },
        }
      );
  
      return data;
    } catch (error) {
      console.log(error);
    }
};

export const getNearestCity = async (latitude, longitude) => {

  // console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    const locations = []

    if (data.status === 'OK') {
      for (const result of data.results) {
          locations.push(result.geometry.location);
      }
    }

    return locations;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}



export const getWeatherData = async (lat, lng) => {
  try{
    // console.log(process.env.REACT_APP_OPENWEATHERMAP_API_WEATHER_API_KEY)
    const {data} = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=19b2d037596b7baccdca4d78677beff4`
      );
    return data;

  }catch(error){
    console.log(error);
  }
};