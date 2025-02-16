"use client";

import { useState } from "react";

const RunScraperButton = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const response = await fetch("/api/scrape");
    const result = await response.json();
    setData(result);
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white rounded-lg py-3 px-5 mt-10"
      >
        {loading ? "Scraping..." : "Get NBA Score"}
      </button>
      {data && data.success && (
        <div className="mt-4 text-white">
          <p>
            {data.score.team1}: {data.score.score1}
          </p>
          <p>
            {data.score.team2}: {data.score.score2}
          </p>
        </div>
      )}
    </div>
  );
};

export default RunScraperButton;
