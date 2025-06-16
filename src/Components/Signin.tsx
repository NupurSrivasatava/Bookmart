import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Link,
} from "@mui/material";

const SignIn = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (role === "buyer") {
      navigate("/buyer-dashboard");
    } else if (role === "seller") {
      navigate("/seller-dashboard");
    } else {
      alert("Please select a role.");
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1519682337058-a94d519337bc")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // optional, fixes bg on scroll
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
            Sign In
          </Typography>
          <form onSubmit={handleSignIn}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />

            <FormControl fullWidth required margin="normal">
              <InputLabel id="role-label">I am a</InputLabel>
              <Select
                labelId="role-label"
                value={role}
                label="I am a"
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value="buyer">Book Buyer</MenuItem>
                <MenuItem value="seller">Book Seller</MenuItem>
              </Select>
            </FormControl>

            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="large"
              >
                Sign In
              </Button>
            </Box>
          </form>

          <Typography variant="body2" align="center" mt={2}>
            Don't have an account?{" "}
            <Link component={RouterLink} to="/signup" underline="hover" variant="body2">
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignIn;
