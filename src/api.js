import axios from 'axios';

const API = axios.create({
  baseURL: 'http://20.244.56.144',
  headers: {
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjIyNDE1LCJpYXQiOjE3NDI2MjIxMTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImExZWMyMzk3LTIxM2EtNDI3ZC04YzNjLTQyMmExMjI4YWRmNyIsInN1YiI6ImNoaW5tYXkuc3JpdmFzdGF2YS4yMmNzZUBibXUuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQk1MIE1VTkpBTCBVTklWRVJTSVRZIiwiY2xpZW50SUQiOiJhMWVjMjM5Ny0yMTNhLTQyN2QtOGMzYy00MjJhMTIyOGFkZjciLCJjbGllbnRTZWNyZXQiOiJuWVpZampvWEd1cWxkRlhzIiwib3duZXJOYW1lIjoiQ2hpbm1heSBTcml2YXN0YXZhIiwib3duZXJFbWFpbCI6ImNoaW5tYXkuc3JpdmFzdGF2YS4yMmNzZUBibXUuZWR1LmluIiwicm9sbE5vIjoiMjIwMzU1In0.DENvJ6F54ItNso7w949kK34fZsI6Q4SZ78MVqUbZEj0`, 
  },
});

export const fetchUsers = () => API.get('/test/users');
export const fetchPosts = () => API.get('/test/posts');
export const fetchComments = () => API.get('/test/comments');