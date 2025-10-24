import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FoodShops from "./pages/FoodShops";
import Exhibitions from "./pages/Exhibitions";
import StageEvents from "./pages/StageEvents";
import Notice from "./pages/Notice";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/food-shops"} component={FoodShops} />
      <Route path={"/exhibitions"} component={Exhibitions} />
      <Route path={"/exhibitions/:category"} component={Exhibitions} />
      <Route path={"/stage-events"} component={StageEvents} />
      <Route path={"/notice"} component={Notice} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

