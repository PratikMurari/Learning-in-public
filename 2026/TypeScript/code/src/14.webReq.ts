import axios from "axios";

// Define an interface for the expected structure of the response data
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Make a GET request to the specified URL and log the response data
axios.get("https://example.com/data").then((response) => {
  console.log(response.data);
});
