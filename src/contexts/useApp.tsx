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
      const params = {
        auth_date: WebApp?.initDataUnsafe?.auth_date,
        query_id: WebApp?.initDataUnsafe?.query_id,
        user: WebApp?.initDataUnsafe?.user,
        receiver: WebApp?.initDataUnsafe?.receiver,
        chat: WebApp?.initDataUnsafe?.chat,
        chat_type: WebApp?.initDataUnsafe?.chat_type,
        chat_instance: WebApp?.initDataUnsafe?.chat_instance,
        start_param: WebApp?.initDataUnsafe?.start_param,
        can_send_after: WebApp?.initDataUnsafe?.can_send_after,
        hash: WebApp?.initDataUnsafe?.hash,
      };
      const res = await getUserProfile(params);
      toast.success("User profile: ");
    } catch (ex) {
      // toast.error(ex);
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
