// icisd-main/src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ReviewPolicy from "./pages/ReviewPolicy";
import PaperSubmission from "./pages/PaperSubmission";
import Committee from "./pages/Committee";
import CallForPapers from "./pages/CallForPapers";
import Publications from "./pages/Publications";




import PaymentInstructions from "./pages/PaymentInstructions";
import UploadProof from "./pages/UploadProof";

import ProtectedRoute from "./components/auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment-instructions"
            element={
              <ProtectedRoute>
                <PaymentInstructions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/upload-proof"
            element={
              <ProtectedRoute>
                <UploadProof />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/*New latest routes as said*/}
          <Route path="/review-policy" element={<ReviewPolicy />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/publication" element={<Publications />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
