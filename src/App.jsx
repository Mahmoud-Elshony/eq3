import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import ContainerSwiper from "./components/containerSwiper";
import TheBox from "./components/boxTop";
import CategoryBox from "./components/category";
import DesignYourOwn from "./components/designYourOwn";
import FormHouseSection from "./components/formHouseSection";
import DubleCard from "./components/dubleCard";
import { Box, Button, Container, Typography } from "@mui/material";
import FooterComponent from "./footer";
const card = [
  {
    title: "AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM",
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Fmust-have%2F3dc390ea-7f81-4bc4-9482-113242133dca.jpg&w=1024&q=75",
    description:
      "Affirm provides flexible payment solutions, allowing you to buy better and pay over time.",
    btnTitle: "Learn more",
    dir: "-reverse",
  },
  {
    title: "chodode with confidence",
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Fmust-have%2F99f2f86d-e964-40c7-9bf0-38687054cc61.jpg&w=1024&q=75",
    description:
      "Remove the guesswork in choosing your design upholsteru design by ordering complimentary swatches",
    btnTitle: "Order swathes",
  },
  {
    title: "Complimentary Design Services",
    img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Fmust-have%2Fa15b0fc9-4888-4183-bcc4-d1787699655f.jpg&w=1024&q=75",
    description:
      "Let's create your dream space together",
    btnTitle: "Book a Consulation",
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* asd */}
      <Header></Header>
      <TheBox></TheBox>
      <ContainerSwiper></ContainerSwiper>
      <CategoryBox></CategoryBox>
      <DesignYourOwn></DesignYourOwn>
      <FormHouseSection></FormHouseSection>
      {card.map((m) => (
        <DubleCard card={m}></DubleCard>
      ))}
      <Box sx={{bgcolor:"whitesmoke"}}>
        <Container maxWidth="xl" style={{padding:0,paddingTop:50,paddingLeft:15,paddingBottom:15,marginTop:50}}>
          <Typography variant="h4">
          Become an EQ3 Insider
          </Typography>
          <Typography variant="h6">
          Get the latest news and offers when you become an EQ3 Insider<Button style={{backgroundColor:"black",
            color:"white",
            padding:15,
            marginLeft:30
          }}>Sign up</Button>
          </Typography>
        </Container>
      </Box>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
