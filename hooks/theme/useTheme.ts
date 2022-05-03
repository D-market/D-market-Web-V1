import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { THEME_KEY } from "../../constants/localStorage.constants";
import { ETheme } from "../../enum/Theme.enum";
import { themeAtom } from "../../store/theme/theme";
import local from "../../util/local";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ETheme>(themeAtom);

  const { LIGHT, DARK } = ETheme;

  const toggleChangeTheme = useCallback(() => {
    const switchTheme = currentTheme === LIGHT ? DARK : LIGHT;
    local.set(THEME_KEY, String(switchTheme));
    setCurrentTheme(switchTheme);
  }, [DARK, LIGHT, currentTheme, setCurrentTheme]);

  return {
    toggleChangeTheme,
  };
};

export default useTheme;
