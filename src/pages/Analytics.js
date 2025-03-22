import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';

const Analytics = () => {
  return (
    <div>
      <Typography variant="h4" mb={4}>Analytics</Typography>

      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6">All Posts</Typography>
          <Typography mt={2}>Analytics data about posts...</Typography>
          <Button variant="contained" sx={{ mt: 2, borderRadius: 2 }}>View All</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
