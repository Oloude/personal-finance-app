import Stats from "../components/Homepage/Stats";

function Home() {
  return <div className="flex flex-col gap-8">
    <h1 className="text-preset1 text-grey900 font-bold">Overview</h1>
    <Stats/>
  </div>;
}

export default Home;
