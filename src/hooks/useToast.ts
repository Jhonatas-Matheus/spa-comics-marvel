import { toast } from "react-toastify";

export const useToast = () => {
  const toastSucess = (text: string) => {
    return toast.success(text);
  };
  const toastFail = (text: string) => {
    return toast.error(text);
  };
  return { toastSucess, toastFail };
};
