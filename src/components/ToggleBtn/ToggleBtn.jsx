import { useColorMode } from 'theme-ui';

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  const buttonStyles = {
    margin: '8px 0 0 5px',
    padding: '0.5rem 1rem',
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: 'rgba(219, 22, 172, 0.42) 1px 1px 1px 2px',
    transition: 'background-color 0.3s ease',
  };

  const darkButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#333',
    color: '#fff',
  };

  return (
    <button
      onClick={() => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
      style={colorMode === 'light' ? buttonStyles : darkButtonStyles}
    >
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ColorModeToggle;
