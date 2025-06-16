import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1512820790803-83ca734da794)', // Bookstore image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Optional: fixes the background on scroll
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* AppBar */}
      <AppBar position="static" sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Book Mart
          </Typography>
          <Button
            component={Link}
            to="/signup"
            color="inherit"
            variant="outlined"
            sx={{ borderColor: 'white', color: 'white' }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: 4,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '800px',
            color: 'black',
            borderRadius: 3,
            backdropFilter: 'blur(6px)', // subtle blur to match other pages
          }}
        >
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to <strong>Book Mart</strong> — your ultimate destination for discovering, buying, and sharing books!
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you're a casual reader, a book enthusiast, or someone on the hunt for academic material, Book Mart brings
            you a vast collection of titles across genres and subjects. Our mission is to create a seamless and enjoyable
            experience for readers and sellers alike.
          </Typography>
          <Typography variant="body1">
            Join our growing community and explore thousands of books, curated recommendations, and user reviews. With secure
            payment options and a user-friendly interface, Book Mart is the go-to platform for all your reading needs.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default About;
