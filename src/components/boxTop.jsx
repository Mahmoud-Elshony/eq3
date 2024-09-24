import { Box, Container, Typography } from "@mui/material";
import seatBlue from "../assets/imgs/replay-3-seat-blue-fabric-sofa_COMPRESSED.jpeg";
export default function TheBox() {
  return (
    <>
      <Container maxWidth="xl"
        sx={{
          height: "600px",
          backgroundImage: `url(${seatBlue})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        // fit
        }}
      >
        <Box
          position={"relative"}
          bottom={-450}
          sx={{
            width: "100%",
            textAlign: "center",
            color:"white",
            background:"linear-gradient(#00000000, #1F1F1FBC) 0% 0% no-repeat border-box"
          }}
        >
          <Typography component={"h2"} fontSize={46} fontWeight={500}>
            THE AUTUMN EDIT: ENJOY UP TO 25% OFF EQ3
          </Typography>
          <Typography component={"p"} mt={1} fontSize={23} fontWeight={500} pb={"39px"}>
          Refresh your space for Fall with 15% off all EQ3, 20% off $2500+, or 25% off $5000 or more.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
