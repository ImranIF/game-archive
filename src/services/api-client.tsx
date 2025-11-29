/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "caac42a0f0cb493ba82f777a757042a6",
  },
});
