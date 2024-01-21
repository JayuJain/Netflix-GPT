import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (trailerId) => {
    const dispatch = useDispatch();
  useEffect(() => {
    getTrailer();
  }, [])
//   console.log(trailerId);
  
  const getTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + trailerId +  "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
    dispatch(addTrailerVideo(filterData[0]));
  }
}

export default useTrailerVideo;