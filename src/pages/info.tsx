import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { grey } from "@mui/material/colors";
import { Box, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme/theme";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? grey[100] : grey[700],
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? grey[300] : grey[300],
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Ubuntu"].join(","),
    "&:focus": {
      boxShadow: `${grey[300]} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function Input() {
  return (
    <div>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number</p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          width: "385px",
          bgcolor: "grey.100",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            maxWidth: "300px", // Adjust the width as desired
          }}
        >
          <FormControl
            variant='standard'
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <InputLabel htmlFor='name-input'>Name</InputLabel>
            <BootstrapInput defaultValue='e.g. Stephen King' id='name-input' />
          </FormControl>

          <FormControl variant='standard'>
            <InputLabel htmlFor='email-input'>Email Address</InputLabel>
            <BootstrapInput
              defaultValue='e.g. stephenKing@lorem.com'
              id='email-input'
            />
          </FormControl>

          <FormControl variant='standard'>
            <InputLabel htmlFor='number-input'>Phone Number</InputLabel>
            <BootstrapInput
              defaultValue='e.g. +1 234 567 890'
              id='number-input'
            />
          </FormControl>
        </Box>
        <Button
          component={Link}
          to='/'
          variant='contained'
          color='primary'
          sx={{
            backgroundColor: theme.palette.primary.dark,
            color: "grey.100",
          }}
        >
          Go back
        </Button>
        <Button
          component={Link}
          to='/plan'
          variant='contained'
          color='primary'
          sx={{
            backgroundColor: theme.palette.primary.dark,
            color: "grey.100",
          }}
        >
          Next Step
        </Button>
      </Box>
    </div>
  );
}

export default Input;
