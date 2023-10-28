
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";  
import { getPlacesData, getWeatherData, getNearestCity } from "./api";
import { useRouter } from "next/router"

const Home = () => {
  
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]); 
  const [childClicked, setChildClicked] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nearestCity, setNearestCity] = useState([]);

  const router = useRouter();

  useEffect(() => {
   const user = localStorage.getItem("user");
    if (!user) {
        router.push("/login")
    }
  }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredData = places?.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData);
  }, [ratings]);

  useEffect(() => {
    setIsLoading(true);

    getNearestCity(coordinates.lat, coordinates.lng).then((data) => {
      console.log(data);
      setNearestCity(data);
    });

      getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
        setFilteredPlaces([])
        setIsLoading(false);
      })
  }, [type, bounds]);


  useEffect(() => {
    const fetchWeatherData = async () => {
      const updatesData = [];
      for (const result of nearestCity) {
        const data = await getWeatherData(result.lat, result.lng);
        updatesData.push(data);
      }
      console.log(updatesData);
      setWeatherData(updatesData);
    };
    fetchWeatherData();
  }, [nearestCity])

  return (
    <main className="h-screen ">
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      <div className="flex w-full flex-wrap h-[90%]">
        <div className="w-full md:w-1/3 ">
          <List
            places={filteredPlaces?.length ? filteredPlaces : places}
            isLoading={isLoading}
            childClicked={childClicked}
            type={type}
            setType={setType}
            setRatings={setRatings}
            ratings={ratings}
          />
        </div>
        <div className="w-full md:w-2/3">
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={filteredPlaces?.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
