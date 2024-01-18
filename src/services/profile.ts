import toast from "react-hot-toast";
import AxiosInstance from "./api";

export const getUserProfile = async ({ ...params }) => {
  const url = "user/get-user";
  toast.success(url);
  return await AxiosInstance.get(url, { params });
};
