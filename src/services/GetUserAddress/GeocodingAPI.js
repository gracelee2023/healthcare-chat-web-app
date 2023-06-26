import React, { useState } from "react";

export const useFetchLocationName = async (lat, lng) => {
  const [data, setData] = useState(null);
  await fetch(
    "https://www.mapquestapi.com/geocoding/v1/reverse?key=b0WS5Dx7GnX52t92qiULiOCqJRvVVcnY&location=" +
      lat +
      "%2C" +
      lng +
      "&outFormat=json&thumbMaps=false"
  )
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.results[0].locations[0] !== undefined) {
        // console.log(responseJson.results[0].locations[0].adminArea5)
        setData(responseJson.results[0].locations[0].adminArea5);
      }
    });
  return data;
};
