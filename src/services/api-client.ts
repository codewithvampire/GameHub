import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ded97c5c3014381ba560bbb09845d61",
  },
});
