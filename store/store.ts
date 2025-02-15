import {create} from "zustand";

type Store = {
    vlrAlcool: string;
    vlrGasolina: string;
    setVlrAlcool: (value: string) => void;
    setVlrGasolina: (value: string) => void;
}

export const useStore = create<Store>((set) => ({
   vlrAlcool: "",
   vlrGasolina: "",
   setVlrAlcool: (value: string) => set({vlrAlcool: value}),
   setVlrGasolina: (value: string) => set({vlrGasolina: value})
}))