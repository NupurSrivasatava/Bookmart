import React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Container,
  Link,
} from "@mui/material";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/about"); // Placeholder redirect
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // optional for fixed bg effect
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSignUp}>
            <TextField
              label="Full Name"
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              fullWidth
              required
              margin="normal"
              variant="outlined"
              type="email"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="large"
              >
                Sign Up
              </Button>
            </Box>
          </form>

          <Box mt={3} textAlign="center">
            <Typography variant="body2">
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/signin"
                underline="hover"
                sx={{ fontWeight: 500 }}
              >
                Sign In
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;
