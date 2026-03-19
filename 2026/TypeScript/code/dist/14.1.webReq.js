import axios from "axios";
// Make a GET request to the specified URL and log the response data
axios.get("https://example.com/data").then((response) => {
    console.log(response.data);
});
// Make a GET request to the specified URL and log the response data with proper typing
const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log("Todo", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.message);
            if (error.response) {
                console.error("Status code:", error.response.status);
            }
        }
    }
};
//# sourceMappingURL=14.1.webReq.js.map