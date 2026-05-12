import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--surface)" }}>
      {/* Placeholder content so the navbar has space to scroll against */}
      <div
        className="flex flex-col items-center justify-center min-h-screen text-center px-6"
        style={{ paddingTop: "80px" }}
      >
        <p
          className="text-sm tracking-widest uppercase mb-4"
          style={{
            fontFamily: "var(--app-font-body)",
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
          }}
        >
          Coming soon
        </p>
        <h1
          className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
          style={{
            fontFamily: "var(--app-font-display)",
            color: "var(--text-primary)",
            lineHeight: 1.05,
          }}
        >
          Creative{" "}
          <span style={{ color: "var(--brand)" }}>AI</span>
          <br />
          Technologist
        </h1>
        <p
          className="max-w-lg text-base sm:text-lg"
          style={{
            fontFamily: "var(--app-font-body)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          Designing at the intersection of intelligence and imagination.
        </p>
      </div>

      {/* Tall spacer so the scroll-based navbar effect can be tested */}
      <div className="h-screen" />
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
          <Navbar />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
