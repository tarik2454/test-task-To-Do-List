import { StyledFormControlLabel, StyledSwitch } from './SwitchTheme.styled';
import { useThemeContext } from '../../providers/ThemeContextProvider';

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
