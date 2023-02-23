import { PostType } from '@/types/post.type';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getPostsService = (page = 1): Promise<PostType[]> => {
  return fetch(`${baseUrl}/posts?_page=${page}&_limit=5`).then(response => {
    if (!response.ok) {
      throw new Error('Error! Bad request');
    }
    return response.json();
  });
};

export const deletePostService = (postId: number): Promise<PostType> => {
  return fetch(`${baseUrl}/posts/${postId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error! Bad request');
    }
    return response.json();
  });
};
