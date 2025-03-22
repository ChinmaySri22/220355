import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { fetchPosts, fetchComments } from '../api';

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingPosts = async () => {
      const postsResponse = await fetchPosts();
      const commentsResponse = await fetchComments();

      const postCommentCounts = postsResponse.data.map((post) => ({
        ...post,
        commentCount: commentsResponse.data.filter(
          (comment) => comment.postId === post.id
        ).length,
      }));

      const sortedPosts = postCommentCounts.sort(
        (a, b) => b.commentCount - a.commentCount
      );

      setTrendingPosts(sortedPosts.slice(0, 5));
    };

    getTrendingPosts();
  }, []);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Trending Posts
      </Typography>
      <List>
        {trendingPosts.map((post) => (
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

export default TrendingPosts;