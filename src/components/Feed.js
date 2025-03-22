import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { fetchPosts, fetchComments } from '../api';

const Feed = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      const postsRes = await fetchPosts();
      const commentsRes = await fetchComments();

      const postsWithComments = postsRes.data.map((post) => ({
        ...post,
        commentCount: commentsRes.data.filter(
          (comment) => comment.postId === post.id
        ).length,
      }));

      setFeedData(postsWithComments);
    };

    loadFeed();
  }, []);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        All Posts
      </Typography>
      <List>
        {feedData.map((post) => (
          <ListItem key={post.id}>
            <ListItemText
              primary={post.title}
              secondary={`Comments: ${post.commentCount}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Feed;
