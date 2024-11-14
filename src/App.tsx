import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/Authroutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { ThemeProvider, defaultTheme, mergeTheme } from "evergreen-ui";
import OnboardingRoutes from "./routes/OnboardingRoutes";

const theme = mergeTheme(defaultTheme, {
  components: {
    Button: {
      baseStyle: {
        color: "white",
        backgroundColor: "#7e6362",
      },
    },
    Link: {
      baseStyle: {
        color: defaultTheme.colors.gray800,
      },
    },
  },
});

const App = () => {
  const isAuthenticated = false; // Replace with actual authentication logic
  return (
    <ThemeProvider value={theme}>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <Route path="/*" element={<PrivateRoutes />} />
          ) : (
            <>
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/onboarding/*" element={<OnboardingRoutes />} />
            </>
          )}
          {/* Redirect all other paths */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
