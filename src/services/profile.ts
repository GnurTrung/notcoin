import toast from "react-hot-toast";
import AxiosInstance from "./api";

export const getUserProfile = async ({ ...params }) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}user/get-user`;
  toast.error(url);
  return await AxiosInstance.get(url, { params });
};
