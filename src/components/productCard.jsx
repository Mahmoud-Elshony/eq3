import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function CardComponent({product}) {
    console.log(product);
    return (<>
        <Box sx={{p:10,backgroundColor:"whitesmoke"}}>
            {/* { product} */}
            <img src={product.imageUrl} alt={product.altText} />
            <Box sx={{ padding: 1 }}>
                <Typography variant="body2" textAlign={"center"}>{product.name}</Typography>
            </Box>
        </Box>
    </>)
}