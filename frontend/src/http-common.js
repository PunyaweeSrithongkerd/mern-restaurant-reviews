import axios from "axios";

export default axios.create({
  baseURL: "https://ap-southeast-1.aws.data.mongodb-api.com/app/restuarant-reviews-gootv/endpoint/",
  headers: {
    "Content-type": "application/json"
  }
});