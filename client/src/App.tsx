import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import InnovationStartups from "@/pages/innovation/Startups";
import InnovationPatents from "@/pages/innovation/Patents";
import InnovationGrants from "@/pages/innovation/Grants";
import InnovationPublications from "@/pages/innovation/Publications";
import InnovationProjects from "@/pages/innovation/Projects";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/innovation/startups" component={InnovationStartups} />
        <Route path="/innovation/patents" component={InnovationPatents} />
        <Route path="/innovation/grants" component={InnovationGrants} />
        <Route path="/innovation/publications" component={InnovationPublications} />
        <Route path="/innovation/projects" component={InnovationProjects} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
