// components/ClientProviders.tsx
"use client";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeContext";
import AnimatedMain from "@/components/AnimatedMain";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Toaster position="top-center" />
      <AnimatedMain>{children}</AnimatedMain>
    </ThemeProvider>
  );
}
