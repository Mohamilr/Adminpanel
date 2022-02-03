import { toast } from "react-hot-toast";

export const Toaster = {
  success: (msg) => toast.success(msg),
  error: (msg) => toast.error(msg),
};

export const getUserId = (pathname) => {
  return pathname?.split("/")[3];
};
