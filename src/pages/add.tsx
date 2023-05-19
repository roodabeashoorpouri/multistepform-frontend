import { Box, Button, Checkbox, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme/theme";
import { useState } from "react";
// import { AddonPlans } from "../assets/data";

const Add = () => {
  const [user, setUser] = useState();

  return (
    <main>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>$
      <Box
        display='flex'
        bgcolor='contrastText'
        p={4}
        borderRadius={8}
        boxShadow={1}
        maxWidth={400}
        width='100%'
      >
        <Checkbox defaultChecked />
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
      <Box
        display='flex'
        bgcolor='contrastText'
        p={4}
        borderRadius={8}
        boxShadow={1}
        maxWidth={400}
        width='100%'
      >
        <Checkbox defaultChecked />
        <Typography variant='h6' align='center' mb={2}>
          Larger storage
        </Typography>
        <Typography variant='body1' mb={4}>
          Extra 1TB of cloud save
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>+$20/yr</Typography>
        </Box>
      </Box>
      <Box
        display='flex'
        bgcolor='contrastText'
        p={4}
        borderRadius={8}
        boxShadow={1}
        maxWidth={400}
        width='100%'
      >
        <Checkbox defaultChecked />
        <Typography variant='h6' align='center' mb={2}>
          Customizable profile
        </Typography>
        <Typography variant='body1' mb={4}>
          Custom theme on your profile
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>+$20/yr</Typography>
        </Box>
      </Box>
      <Button
        component={Link}
        to='/plan'
        variant='contained'
        color='primary'
        sx={{ backgroundColor: theme.palette.primary.dark, color: "grey.100" }}
      >
        Go back
      </Button>
      <Button
        component={Link}
        to='/finish'
        variant='contained'
        color='primary'
        sx={{ backgroundColor: theme.palette.primary.dark, color: "grey.100" }}
      >
        Next Step
      </Button>
    </main>
  );
};
export default Add;
