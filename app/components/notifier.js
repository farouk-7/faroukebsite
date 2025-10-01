import { toast } from "react-toastify";

export const successNotifier = (message = "Success!") => {
  toast.success(message, {
    position:"bottom-center",
    autoClose: 3000,
  });
};

export const errorNotifier = (message = "Error!") => {
  toast.error(message, {
    autoClose: 3000,
  });
};
