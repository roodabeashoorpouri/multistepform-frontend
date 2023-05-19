import { Box, Button, Checkbox, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme/theme";
// import { useState } from "react";

function Finish() {
  return (
    <main>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <Box
        display='flex'
        bgcolor='contrastText'
        p={4}
        borderRadius={8}
        boxShadow={1}
        maxWidth={400}
        width='100%'
      >
        <Typography variant='h6' align='center' mb={2}>
          Online service
        </Typography>
        <Typography variant='body1' mb={4}>
          Access to multiplayer games
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>+$10/yr</Typography>
        </Box>
      </Box>
      <Button
        component={Link}
        to='/add'
        variant='contained'
        color='primary'
        sx={{ backgroundColor: theme.palette.primary.dark, color: "grey.100" }}
      >
        Go back
      </Button>
      <Button
        component={Link}
        to='/congrats'
        variant='contained'
        color='primary'
        sx={{ backgroundColor: theme.palette.primary.dark, color: "grey.100" }}
      >
        Confirm
      </Button>
    </main>
  );
}
export default Finish;
