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
        <div style={{ padding: "0px 1.75rem 1.75rem", maxWidth: "100%" }}>
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
                <FormControl as={GridItem} colSpan={[6, 6]} marginBottom={""}>
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
                <FormControl
                  as={GridItem}
                  colSpan={[6, 6]}
                  marginBottom={"0px"}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      MozBoxAlign: "center",
                      alignItems: "center",
                      width: "100%",
                      display: "flex",
                      flexFlow: "row nowrap",
                    }}
                  >
                    <div
                      style={{
                        height: "1px",
                        color: "#454549",
                        width: "full-width",
                      }}
                      className="divider Dividerstyles__DividerRoot-sc-hbak5l-0 gxHeqE"
                    ></div>
                    <button
                      disabled=""
                      className="switchnetwork Buttonstyles__ButtonRoot-sc-16rn1ht-2 bMBecp Button Disabled Lg Secondary Buttonstyles__ButtonRoot-sc-1btfe8w-0 BridgePage___StyledButton-sc-1qlpql3-1 lawKxh dgUXds"
                      type="button"
                    >
                      <span className="Buttonstyles__ButtonContent-sc-16rn1ht-1 DyOrS">
                        <div className="Rowstyles__RowRoot-sc-x5gyks-0 kRfWwY">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1em"
                            height="1em"
                            className="SvgIconstyles__ExtendedSvg-sc-1xxe7gt-0 bKvaou Icon BridgePage___StyledExchangeIcon-sc-1qlpql3-2 cocPoP"
                            role="img"
                            data-testid="ExchangeIcon"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.1649 6.43321L11.9261 10.1944L13.2837 8.83676L7.85316 3.40618C7.47826 3.03127 6.87042 3.03127 6.49552 3.40618L1.06494 8.83676L2.42258 10.1944L6.2449 6.37208V15.605H8.1649V6.43321ZM15.8643 17.0968L12.103 13.3356L10.7454 14.6932L16.176 20.1238C16.5509 20.4987 17.1588 20.4987 17.5337 20.1238L22.9643 14.6932L21.6066 13.3356L17.7843 17.1579V7.92499H15.8643V17.0968Z"
                              fill="#B480FF"
                            ></path>
                          </svg>
                          <h6 class="Typographystyles__TypographyRoot-sc-yapy9o-0 hiMeCb Typography Typography-heading Typographystyles__TypographyRoot-sc-y1lfxc-0 jTfUNa">
                            Switch Network
                          </h6>
                        </div>
                      </span>
                    </button>
                    <div
                      style={{
                        height: "1px",
                        color: "#454549",
                        width: "full-width",
                      }}
                      className="divider Dividerstyles__DividerRoot-sc-hbak5l-0 gxHeqE"
                    ></div>
                  </div>
                </FormControl>

                <FormControl
                  as={GridItem}
                  colSpan={[6, 6]}
                  marginBottom={"0"}
                >
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
                <FormControl
                  as={GridItem}
                  colSpan={[6, 6]}
                  marginBottom={"-20px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="0.875rem"
                    lineHeight={"150%"}
                    fontWeight="600"
                    color="white"
                    textAlign={"center"}
                    columnGap={"5px"}
                    display={"flex"}
                    verticalAlign={"middle"}
                    lineHeight={"143%"}
                    fontWeight={"500"}
                  >
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{fontSize:'0.75rem', color:"rgb(162, 162, 164)",   lineHeight: '133%'}}>Recieve</div>
                      <div>0</div>

                    </div>
                    <div
                      style={{ fontSize: "1.125rem" }}
                      class="Popoverstyles__PopoverRoot-sc-11d66z9-0 hgnOEU PopoverRoot"
                    >
             
                    </div>
                  </FormLabel>
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="0.85rem"
                    lineHeight={"350%"}
                    color="rgb(162, 162, 164)"
                    overflow='hidden'
                    display='block'
                    margin='0px'
                    marginBlock='0px'
                    marginInline='0px'
                    
                    fontWeight='600'
                  
                  >
                    {"   "}BTC{" "}
                  </FormLabel>
                </FormControl>

                <FormControl
                  as={GridItem}
                  colSpan={[6, 6]}
                  marginBottom={"0px"}
                >
                  <div
                    style={{
                      height: "1px",
                      color: "#454549",
                      width: "full-width",
                    }}
                    className="divider Dividerstyles__DividerRoot-sc-hbak5l-0 gxHeqE"
                  ></div>
                </FormControl>

                <FormControl
                  as={GridItem}
                  colSpan={[6, 6]}
                  marginBottom={"-40px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="0.875rem"
                    lineHeight={"150%"}
                    fontWeight="600"
                    color="white"
                    textAlign={"center"}
                    columnGap={"5px"}
                    display={"flex"}
                    verticalAlign={"middle"}
                    lineHeight={"143%"}
                    fontWeight={"500"}
                  >
                    Fee{" "}
                    <div
                      style={{ fontSize: "1.125rem" }}
                      class="Popoverstyles__PopoverRoot-sc-11d66z9-0 hgnOEU PopoverRoot"
                    >
                      <div class="Popoverstyles__PopoverContent-sc-11d66z9-4 jnCAHK PopoverContent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="1em"
                          height="1em"
                          class="SvgIconstyles__ExtendedSvg-sc-1xxe7gt-0 bKvaou Icon FeePopoverstyles__FeePopoverIcon-sc-1h92t3m-0 jHbSsx"
                          role="img"
                          data-testid="HelpIcon"
                          fill="white"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 20.8C16.8602 20.8 20.8 16.8602 20.8 12C20.8 7.13989 16.8602 3.19999 12 3.19999C7.13989 3.19999 3.19999 7.13989 3.19999 12C3.19999 16.8602 7.13989 20.8 12 20.8ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12.402 7.63066C12.049 7.56512 11.6846 7.60515 11.3543 7.7457C11.024 7.88625 10.7425 8.12112 10.5451 8.42088C10.3476 8.72064 10.243 9.07198 10.2442 9.43093L8.0442 9.43855C8.04147 8.6468 8.27233 7.87183 8.70787 7.21064C9.14342 6.54945 9.76432 6.03142 10.4929 5.72139C11.2214 5.41135 12.0251 5.32309 12.8037 5.46764C13.5821 5.6122 14.3005 5.98316 14.8692 6.53407L14.8721 6.53682C15.2705 6.92566 15.5732 7.40179 15.7562 7.92764C15.9392 8.45348 15.9974 9.01467 15.9264 9.56688L15.9255 9.57401L15.9253 9.57399C15.8026 10.4821 15.3125 11.1933 14.875 11.7059C14.6675 11.9516 14.4358 12.1901 14.2365 12.3955C14.1898 12.4436 14.1449 12.4899 14.1025 12.534C13.8606 12.7854 13.67 12.996 13.5203 13.209L13.5195 13.21C13.2616 13.5763 13.1112 14.007 13.085 14.4538V14.6721H10.885V14.4246C10.885 14.4068 10.8854 14.389 10.8862 14.3712C10.9286 13.4993 11.218 12.6574 11.7205 11.9437C11.9736 11.5836 12.2647 11.2711 12.517 11.0088C12.5749 10.9486 12.6302 10.8916 12.6833 10.8369C12.8776 10.6365 13.0419 10.467 13.1957 10.2847L13.2001 10.2796C13.5335 9.88912 13.7047 9.57092 13.7448 9.28238C13.7716 9.0695 13.7489 8.85327 13.6783 8.6506C13.6077 8.44733 13.4907 8.26325 13.3369 8.11274C13.0794 7.86375 12.7542 7.69608 12.402 7.63066ZM12 18.6C12.6075 18.6 13.1 18.1076 13.1 17.5C13.1 16.8925 12.6075 16.4 12 16.4C11.3925 16.4 10.9 16.8925 10.9 17.5C10.9 18.1076 11.3925 18.6 12 18.6Z"
                            fill="rgb(162, 162, 164)"
                          ></path>
                        </svg>
                        <div class="Popoverstyles__PopoverSnitch-sc-11d66z9-5 iGRDds"></div>
                      </div>
                    </div>
                  </FormLabel>
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="0.85rem"
                    lineHeight={"150%"}
                    fontWeight={"200"}
                    color="rgb(224, 224, 225);"
                  >
                    ~{"   "}0 BTC
                  </FormLabel>
                </FormControl>

                <FormControl
                  as={GridItem}
                  colSpan={[6, 6]}
                  marginBottom={""}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="0.8rem"
                    lineHeight={"150%"}
                    fontWeight="600"
                    color="white"
                    textAlign={"center"}
                    columnGap={"0px"}
                    display={"flex"}
                    verticalAlign={"middle"}
                    lineHeight={"143%"}
                    fontWeight={"500"}
                  >
                    Estimated Time of Arrival{" "}
                  </FormLabel>
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="0.85rem"
                    lineHeight={"150%"}
                    fontWeight={"200"}
                    color="rgb(224, 224, 225);"
                  >
                    ~{"   "}0 Mins
                  </FormLabel>
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
                    width={"100%"}
                    opacity={"0.4"}
                  >
                    Transfer
                  </Button>
                </FormControl>
              </SimpleGrid>
            </Stack>
          </chakra.form>
        </div>
      </Flex>
    </div>
  );
}

export default Content;
