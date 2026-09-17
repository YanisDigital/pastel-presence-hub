import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { IS_DEMO } from "./config";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Sonner
      offset={IS_DEMO ? 56 : undefined}
      mobileOffset={IS_DEMO ? { bottom: 56 } : undefined}
    />
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
