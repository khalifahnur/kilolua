import { create } from 'zustand';
import { MutableRefObject } from 'react';

type CoffeeStore = {
  refs: Record<string, MutableRefObject<any>>;
  setRef: (name: string, ref: MutableRefObject<any>) => void;
};

export const useCoffeeStore = create<CoffeeStore>((set) => ({
  refs: {},
  setRef: (name, ref) => set((state) => ({ refs: { ...state.refs, [name]: ref } })),
}));
