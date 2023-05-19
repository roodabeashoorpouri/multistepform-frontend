import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Buttons = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <Box
        bgcolor='#f5f5f5'
        p={4}
        borderRadius={8}
        boxShadow={1}
        maxWidth={400}
        width='100%'
      >
        <Typography variant='h5' align='center' mb={2}>
          Product Details
        </Typography>
        <Typography variant='body1' mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          nisi non elit vestibulum iaculis.
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>Price: $99.99</Typography>
          <Button variant='contained' color='primary'>
            Buy Now
          </Button>
        </Box>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        ml={4}
        bgcolor='#f5f5f5'
        borderRadius={8}
        width={200}
        height={200}
        position='relative'
        overflow='hidden'
      >
        <img
          src='/path/to/your/image.svg'
          alt='Product'
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          // onMouseEnter={(e) => {
          //   e.target.style.transform = 'scale(1.1)';
          // }}
          // onMouseLeave={(e) => {
          //   e.target.style.transform = 'scale(1)';
          // }}
        />
      </Box>
    </Box>
  );
};

export default Buttons;
