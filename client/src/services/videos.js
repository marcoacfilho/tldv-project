import axios from "axios";
import { apiURL } from "../constants";

export const getVideos = () =>
  axios.get(`${apiURL}/videos`).then((response) => {
    return response.data;
  });

export const updateVideo = video =>
  axios.put(`${apiURL}/videos/${video.id}`, {
      slug: video.slug,
      title: video.title,
      url: video.url,
  }).then((response) => {
    return response.data;
  });
