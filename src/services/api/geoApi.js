import endPoints from "./endpoints";
import axios from "axios";

export const getLocation = async (ip) => {
  const response = await axios.get(endPoints.geo.getLocation(ip))
  return response
}