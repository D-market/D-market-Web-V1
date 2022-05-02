import { atom } from "recoil";
import { ETheme } from "../../enum/Theme.enum";
import { getTheme } from "../../util/getTheme";

export const themeAtom = atom<ETheme>({
  key: "themeMode",
  default: getTheme(),
});
