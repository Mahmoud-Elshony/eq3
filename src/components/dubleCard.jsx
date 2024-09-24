import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export default function DubleCard({card,dir}) {
  return (
   <Container maxWidth="xl" sx={{bgcolor:"whitesmoke",mt:6}} style={{padding:0}}>
     <Box display={"flex"} flexDirection={`row${card.dir}`}>
        <Box width={"50%"} sx={{py:20,px:5}}>
          <Typography variant="h4"  fontWeight={"bold"} py={1}>
            {card.title}
          </Typography>
          <Typography variant="body1" py={2}>
            {card.description}
          </Typography>
        
          <Button variant='contained' style={{backgroundColor:"black"}}>
            {card.btnTitle}
          </Button>
        </Box>
        <Box width={"50%"} display={"flex"}>
          <img src={card.img} width={"100%"} style={{margin:"0 auto"}}/>
        </Box>
      </Box>
   </Container>
    
  )
}
