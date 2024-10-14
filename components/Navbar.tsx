import { useRouter } from "next/navigation";
import { Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { ConnectButton } from "@/components/ConnectButton";
import { useAccount } from "wagmi";

export default function Navbar({
  hideConnectWalletBtn,
}: {
  hideConnectWalletBtn?: boolean;
}) {
  const router = useRouter();

  const { isConnected } = useAccount();

  return (
    <Flex
      pt={"10"}
      pr={"1rem"}
      pb={4}
      borderBottom="1px"
      borderColor={"brand.greenLight"}
    >
      <Spacer />
      <Center flex="1" flexDir={"column"}>
        <Heading
          fontSize={30}
          cursor={"pointer"}
          onClick={() => {
            router.push("/");
          }}
        >
          $SMART Token Claim
        </Heading>
        <Center>
          <Heading
            mt={2}
            fontSize={20}
            fontStyle={"italic"}
            fontWeight={"light"}
          >
            Only be claimed by Smart Accounts!
          </Heading>
        </Center>
      </Center>

      <Center flex="1" justifyContent={"end"}>
        {hideConnectWalletBtn ? (
          isConnected ? (
            <ConnectButton />
          ) : (
            ""
          )
        ) : (
          <ConnectButton />
        )}
      </Center>
    </Flex>
  );
}
