import React, { useEffect, useState } from "react";
import "./home.css";
import { SearchBar } from "../SearchLandingScreen/SearchBar/SearchBar";
import HomePostsList from "../HomePostsList";
import * as authService from "../services/auth-service.js";
import * as api from "../services/officialyelp/yelp-api.js";
import { useAddress } from "../services/GetUserAddress/GetAddress.js";
import ReviewListAdmin from "../ReviewList/ReviewListAdmin.js";

const HomeComponent = () => {
  let loggedIn = false;
  const [addressData, setAddressData] = useState("");
  const [businessesData, setBusinessesData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  // useEffect(() => {
  //   try {
  //     const getProfile = async () =>
  //       await authService.profile().then((user) => setCurrentUser(user));
  //     let user = getProfile();
  //   } catch (e) {
  //     setCurrentUser(undefined);
  //   }
  // }, []);
  // console.log(currentUser)
  loggedIn = currentUser.username !== undefined;

  // https://developer.mapquest.com/documentation/geocoding-api/reverse/get
  // Get user's current location and get restaurants near the address
  try {
    const useAddressData = async () =>
      await useAddress().then((data) => {
        data === null ? setAddressData("") : setAddressData(data);
      });
    let address = useAddressData();
  } catch (e) {
    setAddressData("");
  }
  console.log(addressData);
  useEffect(() => {
    try {
      const fetchData = async () =>
        await api
          .findBusinesses(["", addressData])
          .then((data) => setBusinessesData(data.businesses));
      let business = fetchData();
    } catch (e) {
      console.log("fetch business data fail!");
    }
  }, [addressData]);

  return (
    <>
      <SearchBar />
      <div className="wd-home_banner position-relative"></div>
      <div className="container mb-2">
        <ReviewListAdmin />
      </div>
      {(currentUser.accountType === undefined ||
        currentUser.accountType === "PERSONAL") && (
        <div className="container mb-5">
          <h5>Healthcare Providers near you:</h5>
          <HomePostsList businessesData={businessesData} />
        </div>
      )}
    </>
  );
};
export default HomeComponent;
