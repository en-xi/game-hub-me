import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b28856b48f94f9b92b85fc23fa339b3",
  },
});
