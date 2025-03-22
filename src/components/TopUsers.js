import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { fetchUsers, fetchPosts } from '../api';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getTopUsers = async () => {
      const usersResponse = await fetchUsers();
      const postsResponse = await fetchPosts();

      const userPostCounts = usersResponse.data.reduce((acc, user) => {
        acc[user.id] = { ...user, postCount: 0 };
        return acc;
      }, {});

      postsResponse.data.forEach((post) => {
        if (userPostCounts[post.userId]) {
          userPostCounts[post.userId].postCount += 1;
        }
      });

      const sortedUsers = Object.values(userPostCounts).sort(
        (a, b) => b.postCount - a.postCount
      );

      setTopUsers(sortedUsers.slice(0, 5));
    };

    getTopUsers();
  }, []);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Top Users
      </Typography>
      <List>
        {topUsers.map((user) => (
          <ListItem key={user.id}>
            <ListItemText
              primary={user.name}
              secondary={`Posts: ${user.postCount}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TopUsers;
