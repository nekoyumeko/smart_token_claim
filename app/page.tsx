"use client";
export const runtime = "nodejs";

import { Button, Center, Text } from "@chakra-ui/react";
import MasterLayout from "@/components/MasterLayout";
import { useWriteContracts } from "wagmi/experimental";

import { smartAbi } from "@/abis/smart";
const SMART = "0x91fF962f7DE9865D3ca8CA151BAc28969F52F34b";

export default function Home() {
  const { writeContracts } = useWriteContracts();

  const handleClaim = () => {
    writeContracts({
      contracts: [
        {
          address: SMART,
          abi: smartAbi,
          functionName: "prepapreClaim",
        },
        {
          address: SMART,
          abi: smartAbi,
          functionName: "claim",
        },
      ],
    });
  };

  return (
    <MasterLayout hideConnectWalletBtn={false}>
      <Center flexDir={"column"} mt={"3rem"}>
        <Button onClick={handleClaim}>Claim</Button>
      </Center>
    </MasterLayout>
  );
}
