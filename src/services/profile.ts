import toast from "react-hot-toast";
import AxiosInstance from "./api";

export const getUserProfile = async ({ ...params }) => {
  const url = `https://0bd47518-8000.asse.devtunnels.ms/xaitama-api/user/get-user`;
  toast.error(url);
  return await AxiosInstance.get(url, { params });
};
