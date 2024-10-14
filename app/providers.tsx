"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/style/theme";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { coinbaseWallet } from "@rainbow-me/rainbowkit/wallets";
import { http, WagmiProvider, createConfig } from "wagmi";
import { base } from "wagmi/chains";

const appName = "$SMART Token Claim";
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID!;

const connectors = connectorsForWallets(
  [
    {
      groupName: "Popular",
      wallets: [coinbaseWallet],
    },
  ],
  { appName, projectId }
);

const config = createConfig({
  connectors,
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={darkTheme()} modalSize={"compact"}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );
}
