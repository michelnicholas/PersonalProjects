import fetch from "node-fetch";

export default async function handler(req, res) {
  const url = "https://nba-api-free-data.p.rapidapi.com/nba-atlantic-team-list";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "01311fe82emsh9a58a2549545b83p1d6f4cjsn1f17887844f4",
      "x-rapidapi-host": "nba-api-free-data.p.rapidapi.com",
    },
  };

  try {
    // Fetch the data from the API
    const response = await fetch(url, options);
    const result = await response.json(); // parse the JSON response

    // Send the result as the API response
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
