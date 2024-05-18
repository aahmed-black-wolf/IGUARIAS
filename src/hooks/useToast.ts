import { toast } from 'react-toastify';

export const tos = (message: string, theme: any, type?: any) => {
  if (type) {
    // @ts-ignore
    return toast[type](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme,
    });
  }

  return toast(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme,
  });
};
