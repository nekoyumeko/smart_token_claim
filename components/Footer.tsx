import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Center,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Box
      flexShrink={0}
      mt="3rem"
      bottom={0}
      w={"100%"}
      bg={"blackAlpha.500"}
      color={"gray.200"}
      borderTop={"solid"}
      borderTopWidth={1}
      borderColor={"brand.greenDarker"}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <Center flexDir={"column"}>
          <Heading size="md">
            Built by:{" "}
            <Link
              color={"twitter.300"}
              href="https://twitter.com/apoorveth"
              isExternal
            >
              <HStack>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
                {"  "}
                <Text display="inline">@apoorveth</Text> <ExternalLinkIcon />
              </HStack>
            </Link>
          </Heading>
          <Heading mt="2rem" size="md" color="brand.greenLight">
            <Link href="https://apoorv.xyz/" isExternal>
              <Text display="inline">[apoorv.xyz]</Text>
            </Link>
          </Heading>
        </Center>
      </Container>
    </Box>
  );
}
