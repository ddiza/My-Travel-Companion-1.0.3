"use client";

import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router"
import useStyles from "./styles.js";

const Header = ({ setCoordinates }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);

  const router = useRouter()

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry?.location.lat();
    const lng = autocomplete.getPlace().geometry?.location.lng();
    setCoordinates({ lat, lng });
  };

  const classes = useStyles();

  const handleLogoutClick = () => {
    localStorage.removeItem("user");
        router.push("/login");
  }

  return (
    <div className="h-16 bg-blue-800 text-white" position="static">
      <div className="w-full h-full  flex justify-between px-10">
        <div className="w-1/2  flex items-center">
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
        </div>
        <div className="w-1/2 bg-red-330 flex items-center justify-end gap-5">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
          <button className="font-semibold text-md border px-5 py-1 rounded hover:bg-slate-50 hover:text-black" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
