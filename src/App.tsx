import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./hooks/useLanguage";
import Home from "./pages/Home";
import ContentDetail from "./pages/ContentDetail";
import Watch from "./pages/Watch";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content/:type/:id/:slug?" element={<ContentDetail />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TVShows />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
