import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  // const { isDarkMode, DarkModeToggle } = useDarkMode();
  const isDarkMode = false;
  return (
    <ButtonIcon onClick={DarkModeToggle}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
