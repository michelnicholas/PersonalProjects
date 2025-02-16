import RunScraperButton from "./components/RunScraperButton";

export default function Home({ searchParams }) {
  console.log(searchParams);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RunScraperButton />
    </main>
  );
}
