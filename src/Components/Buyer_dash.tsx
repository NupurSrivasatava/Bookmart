import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const BuyerDashboard: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("https://images.unsplash.com/photo-1512820790803-83ca734da794")',
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
          Welcome, Book Buyer!
        </Typography>
        <Typography variant="h6">
          Explore our extensive collection of books tailored just for you. Happy reading!
        </Typography>
      </Paper>
    </Box>
  );
};

export default BuyerDashboard;
