import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const SellerDashboard: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          p: 6,
          maxWidth: "600px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(6px)",
          borderRadius: 3,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome, Book Seller!
        </Typography>
        <Typography variant="h6">
          Manage your book listings, track sales, and connect with buyers easily.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SellerDashboard;
