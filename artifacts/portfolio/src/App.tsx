import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsStrip from "@/components/SkillsStrip";
import About from "@/components/About";
import CreativeWork from "@/components/CreativeWork";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import SectionDivider from "@/components/SectionDivider";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Home() {
  return (
    <main style={{ backgroundColor: "var(--surface)" }}>
      <Hero />
      <SkillsStrip />
      <SectionDivider />
      <About />
      <SectionDivider />
      <CreativeWork />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Leadership />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Loader />
          <CustomCursor />
          <Navbar />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
