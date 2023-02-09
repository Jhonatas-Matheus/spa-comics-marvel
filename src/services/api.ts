import axios from "axios";
import md5 from "md5";
const publicApiKey = process.env.REACT_APP_PUBLIC_API_KEY as string;
const privateApiKey = process.env.REACT_APP_PRIVATE_API_KEY as string;
const timestamp = Number(new Date());

const stringToHash = timestamp + privateApiKey + publicApiKey;

const hash = md5(stringToHash);

const url = `http://gateway.marvel.com/v1/public`;

export const api = axios.create({
  baseURL: url,
  params: {
    ts: timestamp,
    apikey: publicApiKey,
    hash: hash,
  },
  timeout: 5000,
});
