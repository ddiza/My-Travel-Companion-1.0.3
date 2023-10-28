"use client";

import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import mapStyles from "./mapStyles";
import useStyles from "./styles.js";

const WeatherIcon = ({ weather }) => {
  return (
    <div className="w-16 flex flex-col gap-0 justify-center items-center">
      <span className="font-bold">{((((weather.main.temp) - 273.15)*1.8)+32).toFixed(1) } <span>&#8451;</span></span>
      <img height={900} className="w-16 -mt-3" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />

    </div>
  );
};

const LocationCard = ({place, classes, matches}) => (
  <div
    className={classes.markerContainer}
  >
    {!matches ? (
      <LocationOnOutlinedIcon color="primary" fontSize="large" />
    ) : (
      <Paper elevation={3} className={classes.paper}>
        <Typography
          className={classes.typography}
          variant="subtitle2"
          gutterBottom
        >
          {" "}
          {place.name}
        </Typography>
        <img
          className={classes.pointer}
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://img.freepik.com/premium-photo/image-wooden-table-front-abstract-blurred-restaurant-lights-background_36051-392.jpg"
          }
        />
        <Rating
          name="read-only"
          size="small"
          value={Number(place.rating)}
          readOnly
        />
      </Paper>
    )}
  </div>
);

const Map = ({
  coordinates,
  places,
  setCoordinates,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals={false}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child)
        }}
      >
        {places?.map((place, i) => (
          <LocationCard 
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            place={place}
            classes={classes}
            matches={matches}
          />
        ))}

        {weatherData.map((data, i) => (
          <WeatherIcon
            key={i}
            lat={data?.coord.lat}
            lng={data?.coord.lon}
            weather={data}
          />
        ))}

      </GoogleMapReact>
    </div>
  );
};

export default Map;

