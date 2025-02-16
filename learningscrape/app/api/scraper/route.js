import puppeteer from "puppeteer";

export async function GET() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://www.espn.com/nba/scoreboard", {
      waitUntil: "domcontentloaded",
    });

    // Wait for scores to load
    await page.waitForSelector(".ScoreCell__Score");

    // Extract score from the first game
    const score = await page.evaluate(() => {
      const teams = Array.from(
        document.querySelectorAll(".ScoreCell__TeamName")
      );
      const scores = Array.from(document.querySelectorAll(".ScoreCell__Score"));

      if (teams.length >= 2 && scores.length >= 2) {
        return {
          team1: teams[0].innerText,
          score1: scores[0].innerText,
          team2: teams[1].innerText,
          score2: scores[1].innerText,
        };
      }
      return null;
    });

    await browser.close();

    return Response.json(
      score
        ? { success: true, score }
        : { success: false, message: "No scores found" }
    );
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
