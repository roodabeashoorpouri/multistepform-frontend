import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme/theme";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";
function Plan() {
  return (
    <main>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <Box
        display='flex'
        bgcolor='contrastText'
        p={4}
        borderRadius={8}
        boxShadow={1}
        maxWidth={100}
        width='100%'
      >
        <img
          src={arcade}
          alt='Product'
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
        <Typography variant='h6' align='center' mb={2}>
          Arcade
        </Typography>
        <Typography variant='body1' mb={4}>
          2 months free
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>+$90/yr</Typography>
        </Box>
      </Box>
      <Box
        display='flex'
        bgcolor='contrastText'
        p={4}
        borderRadius={8}
        boxShadow={1}
        maxWidth={100}
        width='100%'
      >
        <img
          src={iconAdvanced}
          alt='Product'
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
        <Typography variant='h6' align='center' mb={2}>
          Advanced
        </Typography>
        <Typography variant='body1' mb={4}>
          2 months free
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>+$120/yr</Typography>
        </Box>
      </Box>
      <Box
        display='flex'
        bgcolor='contrastText'
        p={4}
        borderRadius={8}
        boxShadow={1}
        maxWidth={100}
        width='100%'
      >
        <img
          src={pro}
          alt='Product'
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
        <Typography variant='h6' align='center' mb={2}>
          Pro
        </Typography>
        <Typography variant='body1' mb={4}>
          2 months free
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>+$150/yr</Typography>
        </Box>
      </Box>
      <Button
        component={Link}
        to='/'
        variant='contained'
        color='primary'
        sx={{ backgroundColor: theme.palette.primary.dark, color: "grey.100" }}
      >
        Go back
      </Button>
      <Button
        component={Link}
        to='/add'
        variant='contained'
        color='primary'
        sx={{ backgroundColor: theme.palette.primary.dark, color: "grey.100" }}
      >
        Next Step
      </Button>
    </main>
  );
}
export default Plan;
