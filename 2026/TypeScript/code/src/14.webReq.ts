import axios from "axios";
import type { AxiosResponse } from "axios";

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

// Make a GET request to the specified URL and log the response data with proper typing
const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log("Todo", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Status code:", error.response.status);
      }
    }
  }
};
