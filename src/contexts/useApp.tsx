import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { getUserProfile } from "../services/profile";

export const ApplicationContext = createContext(null);
export const useApplicationContext = () => useContext(ApplicationContext);

export function ApplicationProvider({ children }: any) {
  const [pro5, setPro5] = useState<any>({});
  const WebApp = useWebApp();
  const handleGetPro5 = async () => {
    try {
      const res = await getUserProfile({
        user: WebApp?.initDataUnsafe,
      });
      toast.success(JSON.stringify(res));
    } catch (ex) {
      toast.error(ex);
    }
  };
  useEffect(() => {
    WebApp?.initDataUnsafe?.user?.id && handleGetPro5();
  }, [WebApp?.initDataUnsafe?.user?.id]);
  return (
    <ApplicationContext.Provider
      value={{
        pro5,
        setPro5,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}