import React from "react";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"; // ✅ import the hook

const BrowsePage = () => {
  useNowPlayingMovies(); // ✅ call the hook to fetch movies

  return (
    <>
      <Header />
      <Maincontainer />
    </>
  );
};

export default BrowsePage;

