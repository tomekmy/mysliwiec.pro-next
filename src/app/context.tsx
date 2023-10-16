import { Dispatch, SetStateAction, createContext } from "react";

type AnimationType = {
  isMainAnimationPlaying: boolean;
  setIsMainAnimationPlaying: Dispatch<SetStateAction<boolean>>;
};

export const Animation = createContext<AnimationType>({
  isMainAnimationPlaying: true,
  setIsMainAnimationPlaying: () => true,
});
