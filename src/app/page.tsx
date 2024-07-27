import Navbar from "./components/Navbar";
import SplitScreen from "./components/SplitScreen";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] bg-white">
        <Navbar />
        <SplitScreen />
      </div>
    </>
  );
}
