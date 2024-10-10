import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter.tsx";
import "./index.css";

import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
    <Toaster position="bottom-right" />
  </StrictMode>,
);
