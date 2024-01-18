import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./components/Pages";
import { BoostsPage } from "./components/Pages/boosts";
import { useExpand } from "@vkruglikov/react-telegram-web-app";
import { ApplicationProvider } from "./contexts/useApp";
import { Toaster } from "react-hot-toast";
import { FrensPage } from "./components/Pages/frens";
import { EarnPage } from "./components/Pages/earn";

function App() {
  const [count, setCount] = useState<number>(0);
  const [maxPower, setMaxPower] = useState<number>(1000);
  const [click, setClick] = useState<number>(1);
  const [progress, setProgress] = useState<number>(100);
  const [currentPower, setCurrentPower] = useState<number>(0);
  const [isIncreasing, setIsIncreasing] = useState<boolean>(false);
  const [isExpanded, expand] = useExpand();
  useEffect(() => {
    expand();
  }, []);

  useEffect(() => {
    setProgress((currentPower / maxPower) * 100);
    if (currentPower > 0 && currentPower < maxPower && !isIncreasing) {
      setIsIncreasing(true);

      const increaser = setInterval(() => {
        setCurrentPower((prevPower) => {
          const newPower = prevPower - 1;
          if (newPower <= 0) {
            clearInterval(increaser);
            setIsIncreasing(false);
            setCurrentPower(0);
          }

          return newPower;
        });
      }, 1000);
    }
  }, [currentPower, maxPower, isIncreasing]);

  return (
    <ApplicationProvider>
      <Toaster />
      <Routes>
        <Route
          index
          element={
            <IndexPage
              click={click}
              count={count}
              currentPower={currentPower}
              setCount={setCount}
              setCurrentPower={setCurrentPower}
              progress={progress}
              maxPower={maxPower}
            />
          }
        />
        <Route path={"boosts"} element={<BoostsPage count={count} />} />
        <Route path={"frens"} element={<FrensPage count={count} />} />
        <Route path={"earn"} element={<EarnPage count={count} />} />
      </Routes>
    </ApplicationProvider>
  );
}

export default App;
