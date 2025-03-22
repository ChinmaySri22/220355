import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button, Grid2 } from '@mui/material';
import axios from 'axios';

const drawerWidth = 220; // Sidebar width

const Dashboard = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    getTopUsers();
    getTrendingPosts();
  }, []);

  const getTopUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Dummy API
      setTopUsers(response.data.slice(0, 5)); // Top 5 users
    } catch (error) {
      console.error('Error fetching top users:', error);
    }
  };

  const getTrendingPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Dummy API
      setTrendingPosts(response.data.slice(0, 5)); // Top 5 posts
    } catch (error) {
      console.error('Error fetching trending posts:', error);
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: '#f0f2f5',
        p: 4,
        minHeight: '100vh',
        marginLeft: `${drawerWidth}px`,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        📊 Dashboard Overview
      </Typography>

      <Grid2 container spacing={4}>
        {/* Top Users Card */}
        <Grid2 item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: 3,
              minHeight: '300px',
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              👑 Top Users
            </Typography>
            {topUsers.map((user) => (
              <Box key={user.id} sx={{ marginBottom: 1.5 }}>
                <Typography variant="subtitle1" color="primary">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>
            ))}
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              }}
            >
              View All Users
            </Button>
          </Paper>
        </Grid2>

        {/* Trending Posts Card */}
        <Grid2 item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: 3,
              minHeight: '300px',
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              🔥 Trending Posts
            </Typography>
            {trendingPosts.map((post) => (
              <Box key={post.id} sx={{ marginBottom: 1.5 }}>
                <Typography variant="subtitle1" color="primary">
                  {post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Post ID: {post.id}
                </Typography>
              </Box>
            ))}
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              }}
            >
              View All Posts
            </Button>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Dashboard;
