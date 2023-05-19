import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/navbar";
import Info from "./pages/info";
import theme from "./theme/theme";
import Plan from "./pages/plan";
import Add from "./pages/add";
import Finish from "./pages/finish";
import Congrats from "./pages/congrats";

const App = () => {
  return (
    <div className='app'>
      <Grid container spacing={3}>
        <Container
          maxWidth='md'
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            bgcolor: "grey.100",
            width: "1000px",
          }}
        >
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  // height: "600px",
                  // width: "1000px",
                  // bgcolor: "grey.700",
                  display: "flex",
                }}
              >
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      bgcolor: "grey.100",
                      display: "flex",
                    }}
                  >
                    <Navbar />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Box
                    sx={{
                      width: "600px",
                      bgcolor: "grey.100",
                      display: "flex",
                    }}
                  >
                    <Routes>
                      <Route path='/' element={<Info />} />
                      <Route path='/plan' element={<Plan />} />
                      <Route path='/add' element={<Add />} />
                      <Route path='/finish' element={<Finish />} />
                      <Route path='/congrats' element={<Congrats />} />
                    </Routes>
                  </Box>
                </Grid>
              </Box>
            </ThemeProvider>
          </BrowserRouter>
        </Container>
      </Grid>
    </div>
  );
};

export default App;
