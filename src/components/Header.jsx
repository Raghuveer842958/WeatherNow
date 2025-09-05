import { CloudSun } from "lucide-react";

function Header() {
  return (
    <header className="w-full flex justify-center items-center mt-3">
      <CloudSun size={40} className="text-yellow-300 mr-2" />
      <h1 className="text-3xl font-bold">WeatherNow</h1>
    </header>
  );
}

export default Header;
