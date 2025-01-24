import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "./routes/Authroutes";
import { Spinner, ThemeProvider, defaultTheme, mergeTheme } from "evergreen-ui";
import OnboardingRoutes from "./routes/OnboardingRoutes";
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import EmailPassword from "supertokens-web-js/recipe/emailpassword";
import { useEffect, useState } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import DashboardLayout from "./DashboardLayout/DashboardLayout";

SuperTokens.init({
  appInfo: {
    apiDomain: process.env.REACT_APP_API_DOMAIN ?? "",
    apiBasePath: process.env.REACT_APP_API_BASE_PATH ?? "",
    appName: process.env.REACT_APP_APP_NAME ?? "",
  },
  recipeList: [Session.init(), EmailPassword.init()],
});

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
  const [isLoading, setIsLoading] = useState(true);
  const { authData, setAuthData } = useAuthContext();

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await Session.doesSessionExist();
      const session = authStatus
        ? await Session.getAccessTokenPayloadSecurely()
        : ({} as {
            userRoles?: string[];
          });

      setAuthData((prevAuthData: Record<string, string>) => ({
        ...prevAuthData,
        isAuthenticated: authStatus,
        roles: session.userRoles ?? [],
        isSuperAdmin: session.isSuperAdmin ?? false,
        orgId: session.orgId,
      }));
      setIsLoading(false);
    };
    console.log("checkAuth");
    checkAuth();
  }, [setAuthData]);

  if (isLoading) {
    return <Spinner size={32} />;
  }

  return (
    <ThemeProvider value={theme}>
      <BrowserRouter>
        <Routes>
          {authData.isAuthenticated ? (
            <Route path="/*" element={<DashboardLayout />} />
          ) : (
            <>
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/onboarding/*" element={<OnboardingRoutes />} />
              <Route path="*" element={<Navigate to="/auth/login" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
