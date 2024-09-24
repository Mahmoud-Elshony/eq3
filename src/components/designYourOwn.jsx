import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export default function DesignYourOwn() {
  return (
   <Container maxWidth="xl" sx={{bgcolor:"whitesmoke",mt:6}}>
     <Box display={"flex"}>
        <Box width={"50%"} sx={{py:20}}>
          <Typography variant="h4"  fontWeight={"bold"} py={1}>
            DESIGN YOUR OWN
          </Typography>
          <Typography variant="h4" py={2}>
            Choose from a variety of designs, styles, and colors to create your dream home.
          </Typography>
          <Typography variant="h6" py={2}>
            50 Leathers | 143 Fabrics | Endless Configuratoin
          </Typography>
          <Button variant='contained' style={{backgroundColor:"black"}}>
            Statr Customizing
          </Button>
        </Box>
        <Box width={"50%"} display={"flex"}>
          <img src='https://images.eq3.com/homepage/CA_EN/featured-category/63ead2f2-2ee2-4f9c-b3f9-c734c479a305.png' width={"80%"} style={{margin:"0 auto"}}/>
        </Box>
      </Box>
   </Container>
    
  )
}
