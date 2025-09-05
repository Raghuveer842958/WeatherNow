import * as Tabs from "@radix-ui/react-tabs";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/weatherSlice";

function WeatherTabs() {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.weather.activeTab);

  return (
    <Tabs.Root
      className="w-full mt-6"
      value={tab}
      onValueChange={(value) => dispatch(setActiveTab(value))}
    >

      <Tabs.List className="flex bg-white/10 backdrop-blur-md rounded-xl p-1 gap-1">
        <Tabs.Trigger
          value="past"
          className={`flex-1 px-4 py-2 text-sm rounded-lg transition ${
            tab === "past"
              ? "bg-white text-blue-600 shadow"
              : "bg-transparent text-white hover:bg-white/20"
          }`}
        >
          Last 7 Days
        </Tabs.Trigger>
        <Tabs.Trigger
          value="next"
          className={`flex-1 px-4 py-2 text-sm rounded-lg transition ${
            tab === "next"
              ? "bg-white text-blue-600 shadow"
              : "bg-transparent text-white hover:bg-white/20"
          }`}
        >
          Next 7 Days
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

export default WeatherTabs;
