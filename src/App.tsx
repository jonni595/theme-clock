import ThemeClock from "./components/ThemeClock";
import ThemeProvider from "./components/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <ThemeClock />
      </ThemeProvider>
    </>
  );
};

export default App;
