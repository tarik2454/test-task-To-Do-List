import { useThemeContext } from '../../providers/ThemeContextProvider';
import { StyledFormControlLabel, StyledSwitch } from './Switch.styled';

export default function SwitchTheme() {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <StyledFormControlLabel
      control={
        <StyledSwitch
          checked={currentTheme === 'dark'}
          onChange={toggleTheme}
        />
      }
      label=""
    />
  );
}
