"use client";
import { MantineProvider } from "@mantine/core";

export function MantainProvides({ children }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}
