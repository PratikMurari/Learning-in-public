import axios from "axios";

// Make a GET request to the specified URL and log the response data
axios.get("https://example.com/data").then((response) => {
  console.log(response.data);
});
