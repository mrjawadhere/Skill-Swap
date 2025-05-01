import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ExploreSkills from "@/pages/explore-skills";
import MySkills from "@/pages/my-skills";
import Workshops from "@/pages/workshops";
import Community from "@/pages/community";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatePresence } from "framer-motion";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/explore" component={ExploreSkills} />
        <Route path="/my-skills" component={MySkills} />
        <Route path="/workshops" component={Workshops} />
        <Route path="/community" component={Community} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
