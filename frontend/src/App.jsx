import { useState, useEffect } from "react";
import axios from "axios";

async function getData() {
  try {
    console.log("Making API request...");
    const response = await axios.get("/api", {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }, 
    });
    console.log("API Response:", response);
    return response.data;
  } catch (error) {
    console.error("API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config
    });
    throw error;
  }
}

export default function Home() {
  const [data, setData] = useState({ message: "Loading..." });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Component mounted, fetching data...");
        const result = await getData();
        console.log("Data fetched successfully:", result);
        setData(result);
      } catch (error) {
        console.error("Error in component:", error);
        setError(error.response?.data?.message || error.message || "Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <main>
        <h1>Error:</h1>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Message from API:</h1>
      <p>{data.message}</p>
      <p>Last updated: {new Date().toLocaleTimeString()}</p>
    </main>
  );
}