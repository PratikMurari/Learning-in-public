const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
    }
    catch (error) {
    }
};
export {};
//# sourceMappingURL=14.2.fetchReq.js.map