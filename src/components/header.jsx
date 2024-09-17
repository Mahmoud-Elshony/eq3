import {
  Box,
  Button,
  Container,
  Divider,
  Grid2,
  Input,
  radioClasses,
  Stack,
  Typography,
} from "@mui/material";
import LocationIcon from "@mui/icons-material/FmdGoodOutlined";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import {
  FavoriteBorderOutlined,
  LanguageOutlined,
  Person2Outlined,
  ShoppingCartCheckoutOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";

let list = [0, 1, 1, 2, 2, 1, 3];
export default function Header() {
  const [isSelected, setSelected] = useState(false);
  return (
    <>
      <Box sx={{ height: 4.3, background: "#000" }}></Box>
      {/* <Box container>s</Box> */}
      <Container maxWidth="xl">
        <Grid2
          container
          spacing={4}
          p={"2px 5px"}
          justifyContent={"space-between"}
        >
          <Typography
            className="logo"
            fontWeight={"bolder"}
            fontSize={36}
            component={"h1"}
            fontFamily={"EQ3-book"}
          >
            EQ3
          </Typography>
          <Stack direction={"row"} m={"10px"}>
            <Stack
              //   bgcolor={"red"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              pr={1}
              spacing={0.6}
              divider={<span style={{ color: "#0005" }}>/</span>}
            >
              <Box
                component={"a"}
                href="https://www.facebook.com/eq3.tech/"
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 700,
                  px: 1,
                }}
              >
                <LocationIcon />
              </Box>

              <Box
                component={"a"}
                href="https://www.facebook.com/eq3.tech/"
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 700,
                  px: 1,
                }}
              >
                <HelpIcon />
              </Box>

              <Box
                component={"a"}
                href="https://www.facebook.com/eq3.tech/"
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 700,
                  px: 1,
                }}
              >
                <FavoriteBorderOutlined></FavoriteBorderOutlined>
              </Box>

              <Box
                component={"a"}
                href="https://www.facebook.com/eq3.tech/"
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 700,
                  p: 1,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.04)",
                    borderRadius: 1,
                  },
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Person2Outlined />
                  <span>Join/Login to EQ3</span>
                </Stack>
              </Box>
              <Box
                component={"a"}
                href="https://www.facebook.com/eq3.tech/"
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 700,
                  p: 1,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.04)",
                    borderRadius: 1,
                  },
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <LanguageOutlined />
                  <span>EN / CAD</span>
                </Stack>
              </Box>
            </Stack>
            <Button
              color="#223"
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                  borderRadius: 1,
                },
              }}
            >
              <ShoppingCartOutlined />
              <span>cart(0)</span>
            </Button>
          </Stack>
        </Grid2>
      </Container>
      <Divider />
      <Container maxWidth="xl">
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} px={1}>
            {[
              "Living",
              "Dining",
              "Bedroom",
              "Outdoor",
              "Office",
              "Lighting",
              "Rugs",
              "Accessories",
              "Brands",
              "Inspiration",
              "Gifts",
              "Sale",
            ].map((e) => (
              <Box
              key={e}
                href="#"
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: 14,
                  textDecoration: "none",
                  paddingY: 2,
                  "&:after": {
                    width: "22px",
                    bgcolor: "#333",
                    height: "2px",
                    content: "''",
                    position: "relative",
                    bottom: "-10px",
                    left: "-29px",
                    display: "inline-block",
                    visibility: "hidden",
                  },
                  "&:hover": {
                    "&:after": {
                      visibility: "visible",
                    },
                  },
                }}
                component={"a"}
              >
                {e}
              </Box>
            ))}
          </Stack>
          <Stack direction={"row"} pr={2}>
            <Box
              component={"label"}
              sx={{
                my: "auto",
                left: isSelected ? -12 : 64,
                position: "relative",
                transition:"all 200ms linear",
                zIndex: -1,
              }}
            >
              Search
            </Box>
            <Box
              component={"input"}
              type={"search"}
              onChange={(e) => e.target.value.length==0?setSelected(false):setSelected(true)}
              //   type="text"
              sx={{
                "&:focus-visible": {
                  outline: "1px solid #000",
                },
                border: "1px solid #0005",
                backgroundColor: "transparent",
                padding: "0px 16px",
                width: "290px",
                // fontSize: 14,
              }}
            />
          </Stack>
        </Stack>
      </Container>
      <Box sx={{
        background:"#934d5a",
        textAlign:"center",
        py:1
      }}>
        <Typography component={"a"} color="white" href="#" sx={{
            fontWeight: 700,
            textDecoration: "none",
            fontSize: 15,
            // padding: "10px",
            "&:hover": {
                textDecoration: "underline",
            //   backgroundColor: "#773946",
            },
  
        }}>
              The autumn Edit: Enjoy Up To 25% Off EQ3. Discount Applied At Checkout
        </Typography>
      </Box>
    </>
  );
}
