import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
const img = [
  "https://www.eq3.com/_next/image?url=http%3A%2F%2Fcdn-yotpo-images-production.yotpo.com%2Finstagram%2F31%2F18003028814304531%2Fmedium.jpg&w=480&q=75",
  "https://www.eq3.com/_next/image?url=http%3A%2F%2Fcdn-yotpo-images-production.yotpo.com%2Finstagram%2F56%2F17975769092589456%2Fmedium.jpg&w=480&q=75",
  "https://www.eq3.com/_next/image?url=http%3A%2F%2Fcdn-yotpo-images-production.yotpo.com%2Finstagram%2F19%2F18060110428434519%2Fmedium.jpg&w=480&q=75",
  "https://www.eq3.com/_next/image?url=http%3A%2F%2Fcdn-yotpo-images-production.yotpo.com%2Finstagram%2F88%2F18005317792654288%2Fmedium.jpg&w=480&q=75",
];
export default function FormHouseSection() {
  return (
    <Container
      maxWidth="xl"
      style={{
        padding: 0,
        marginTop: 50,
        backgroundColor: "whitesmoke",
        textAlign: "center",
        paddingBottom:25
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        {img.map((m) => (
          <img key={m} style={{ width: "355px", height: "417px" }} src={m} />
        ))}
      </Box>
      <Typography variant="h4" pt={5}>
        {" "}
        FROM HOUSE TO HOME
      </Typography>
      <Typography variant="body1" pt={5}>
        Discover people who made a spave their own. #MYEQ3
      </Typography>
      <Button
        style={{
          backgroundColor: "black",
          color: "white",
          marginTop: 20,
          padding: 9,
        }}
      >
        Get inspired
      </Button>
    </Container>
  );
}
