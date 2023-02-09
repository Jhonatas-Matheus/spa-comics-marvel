import axios from "axios";
import md5 from "md5";
const publicApiKey = "6b744a131725a7d7b02425985fcccbd7";
const privateApiKey = "521d8649c12006485e7f5d7363d5a775ac840dc1";
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
