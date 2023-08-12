import { useTheme, useThemeUpdate } from "./ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleSwitch = () => {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div className="mx-2">
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <DarkModeIcon className=" text-red-700" />
        ) : (
          <LightModeIcon className=" text-yellow-500" />
        )}
      </button>
    </div>
  );
};

export default ToggleSwitch;
