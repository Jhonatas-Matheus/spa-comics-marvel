import { createContext, useState } from "react";

interface IModalContextProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
  title: string;
  description: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}
interface IModalMapContextProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalContextParams {
  children: React.ReactNode;
}

export const ModalContext = createContext({} as IModalContextProps);
export const ModalMapsContext = createContext({} as IModalMapContextProps);
export const ModalMapsProvider = ({ children }: IModalContextParams) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <ModalMapsContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalMapsContext.Provider>
  );
};
export const ModalProvider = ({ children }: IModalContextParams) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        image,
        title,
        description,
        setImage,
        setTitle,
        setDescription,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
