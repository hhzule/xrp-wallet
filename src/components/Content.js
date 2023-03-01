import {
  // Box,
  FormControl,
  FormLabel,
  GridItem,
  // Heading,
  Input,
  SimpleGrid,
  Stack,
  // Text,
  chakra,
  // Select,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

function Content() {
  return (
    <div className="content">
      <Flex mt={[10, 0]} justifyContent={"center"} className="formflex">
        <chakra.form
          maxWidth={"100%"}
          width={"39.5rem"}
          borderRadius={"8px"}
          height={"fit-content"}
          padding={"2rem"}
          method="POST"
          shadow="base"
          rounded={[null, "md"]}
          overflow={{
            sm: "hidden",
          }}
        >
          <Stack bg="rgb(35, 35, 37)" borderRadius={"8px"} spacing={6}>
            <SimpleGrid columns={6} spacing={6}>
              <FormControl as={GridItem} colSpan={[6, 6]} marginBottom={'75px'}>
                <FormLabel
                  htmlFor="first_name"
                  fontSize="1rem"
                  lineHeight={"150%"}
                  fontWeight="600"
                  color="rgb(162, 162, 164)"
                >
                  From{" "}
                </FormLabel>
                <Input
                  type="text"
                  name="Send"
                  id="email_address"
                  mt={2}
                  autoComplete="email"
                  height={" 60px "}
                  width={" 100%"}
                  padding={"0.5rem"}
                  borderRadius={"4px"}
                  border={"0.125rem solid transparent"}
                  _hover={"none"}
                  backgroundColor={"rgb(52, 52, 55)"}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 6]} marginBottom={'125px'}>
                <FormLabel
                  htmlFor="first_name"
                  fontSize="1rem"
                  lineHeight={"150%"}
                  fontWeight="600"
                  color="rgb(162, 162, 164)"
                >
                  To
                </FormLabel>
                <Input
                  type="text"
                  name="Send"
                  id="email_address"
                  autoComplete="email"
                  mt={2}
                  height={" 60px "}
                  width={" 100%"}
                  padding={"0.5rem"}
                  borderRadius={"4px"}
                  border={"0.125rem solid transparent"}
                  _hover={"none"}
                  backgroundColor={"rgb(52, 52, 55)"}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 6]}>
                <Button
                  variant="solid"
                  htmlFor="first_name"
                  fontSize="0.875rem"
                  fontWeight="600"
                  color="rgb(245, 245, 247)"
                  borderRadius={"4px"}
                  backgroundColor={"rgb(121, 25, 255)"}
                  padding={"0 0.5rem"}
                  width={'100%'}
                  opacity={'0.4'}
                >
                  Transfer
                </Button>
              </FormControl>
            </SimpleGrid>
          </Stack>
        </chakra.form>
      </Flex>
    </div>
  );
}

export default Content;
