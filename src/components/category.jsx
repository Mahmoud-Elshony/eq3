import { Box, Container, Typography } from "@mui/material";
import CardComponent from "./productCard";

const data = [
  {
    id: "cldm05u3f27jy01109c5fl0yo",
    name: "Ready to Ship Upholstery",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/63ead2f2-2ee2-4f9c-b3f9-c734c479a305.png",
    url: "/category/living/seating/ready-to-ship",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/21ff25e0-b822-4342-973f-083586a38fae.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/7d688882-d1ea-4681-b501-f559c267121d.png",
    altText: "Beige Sofa. Link to ready ship category",
  },
  {
    id: "ck8tpdf7800020154ztxqg7uu",
    name: "Dining",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/b53cceff-1cfe-4bc8-ae38-6db8041bc35a.png",
    url: "/category/dining",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/00cc04b9-ad43-4caa-9987-76ff10d1f822.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/2ab21551-176a-4e59-98ab-8bc737dcf6a7.png",
    altText: "solid wood table and bench shown. Link to dining",
  },
  {
    id: "ck8tpc31n000a01745so0ihql",
    name: "Storage Beds",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/fd37b43b-990a-433b-874e-c1998333a4da.png",
    url: "/category/bedroom/beds/storage-beds",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/b3a6fdb7-ad18-4719-87f7-87764b2b1bc3.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/984c6690-3cad-4f5b-a4e5-0b7295f51839.png",
    altText: "walnut drawer bed is shown. Link to storage beds",
  },
  {
    id: "ck8tpeliy000801628upat7p0",
    name: "Lighting",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/6e6cf6d2-5d45-45f9-9f45-a5c8c450721e.png",
    url: "/category/lighting",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/9c37aa0f-3124-41c8-a455-d5a93ac08bf0.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/aee8d405-9ccb-45dc-b362-50e7553bd4c8.png",
    altText: "black table lamp is shown. Link to lighting",
  },
  {
    id: "cldm07y4r2d7q0186effcvhjx",
    name: "Accent Tables",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/b8eeea1e-5646-4a50-8254-09e1f0015e72.png",
    url: "/category/living/accent-tables",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/1ceb8a11-2adc-4968-9932-a450244c3ef8.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/2afd176f-3f15-4452-802b-a4cc4fbc1123.png",
    altText: "Oak coffee table. Link to accent table category",
  },
  {
    id: "ck8tpdwfg000d0174jffjqj84",
    name: "Rugs",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/5cbbca9e-a093-41ed-b0be-89184ee49ed5.png",
    url: "/category/rugs",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/925400f7-bbf9-400c-bc15-fb0bd4291de0.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/9bb49ba9-f707-44d3-904c-e3da88219ec2.png",
    altText: "brown rug is shown. Link to rug category",
  },
  {
    id: "cldm0d61j27kz0110hq1efoaj",
    name: "Bar \u0026 Counter Stools",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/0e127cf1-e932-4138-bf17-2949793f63c8.png",
    url: "/category/dining/seating/bar--counter-stools",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/847681c3-408e-4e62-9813-be615bc954a6.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/81485f6a-1149-4d0d-a67c-4974aaedf676.png",
    altText: "two stools. Link to counter stools",
  },
  {
    id: "cldm0a1w32d6l01185k70fdbt",
    name: "Accent Stools",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/38e9c17f-d789-4196-89d6-d7403c92a148.png",
    url: "/category/living/seating/stools",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/1fd4b7ae-c1ca-45ce-ad1f-7c2f3e8af0f4.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/f3f69cbd-59e7-4495-81d8-7995d3535efc.png",
    altText: "Terracotta stools. Link to stools",
  },
  {
    id: "ck8tpc42o000b0174m6wdjejk",
    name: "Accessories",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/82dd721b-79ff-465d-8772-1bc8b9ab90a9.png",
    url: "/category/accessories",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/1108c078-9872-4f7c-b925-7c3e6ca88f87.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/8e440138-e688-4e0e-8007-c26d9899e839.png",
    altText: "vases are shown. Link to accessories category",
  },
  {
    id: "ck8tpeuvn00050154lxqoekdz",
    name: "Accent Chairs",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/1fef41ce-1919-498e-9956-06ead3c01c74.png",
    url: "/category/living/seating/chairs",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/d9321d02-2346-4968-8fb6-c0f3918372ac.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/50a8b34a-76df-4d3d-9145-fa14df55d949.png",
    altText: "light-brown-leather-chair",
  },
  {
    id: "ck8tpf8x3000601549emyab2u",
    name: "Outdoor",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/57123820-604a-4dab-ad65-ec693e378c85.png",
    url: "/category/outdoor",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/b89679be-f1db-4d21-a8ad-1a6f6c9a3a1f.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/1f7ed17d-a2a9-48e4-aa97-d6ece995ab05.png",
    altText: "black outdoor chair and table. Link to outdoor",
  },
  {
    id: "ck8tpcgtc00010154kms6acr4",
    name: "Media \u0026 Storage",
    imageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/6a9e69cb-58ba-4c96-9585-0f7998a241c1.png",
    url: "/category/living/media--storage",
    tabletImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/65a7e3ca-9ae1-44ad-ae21-923e912c0d7c.png",
    mobileImageUrl:
      "https://images.eq3.com/homepage/CA_EN/featured-category/c1bfbc01-9925-4dd0-9632-c040065174ad.png",
    altText: "media unit is shown. Link to media storage",
  },
];
export default function CategoryBox() {
  return (
    <>
      <Container maxWidth="xl" style={{padding:0}}>
        <Typography component={"h2"} fontSize={30} pt={5}>
          SHOP BY CATEGORY
        </Typography>
        <Box sx={{ display: "flex",flexWrap:"wrap" ,rowGap:3,columnGap:3 }}>
          {data.map((card) => (
            <CardComponent product={card}></CardComponent>
          ))}
        </Box>
      </Container>
    </>
  );
}
