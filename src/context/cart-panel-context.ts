import { createContext } from "react";

interface ICartPanelContext {
  closeModal: () => void;
}

const defaultContext = {
  closeModal: () => { }
}

export const CartPanelContext = createContext<ICartPanelContext>(defaultContext);