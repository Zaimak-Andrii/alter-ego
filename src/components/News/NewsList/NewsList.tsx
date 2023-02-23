import { PostType } from '@/types/post.type';
import { FC } from 'react';
import { Stack } from '@mui/material';
import NewsItem from '../NewsItem/NewsItem';

type NewsListPropsType = {
  posts: PostType[];
  onDeletePost: (postId: number) => void;
};

const NewsList: FC<NewsListPropsType> = ({ posts, onDeletePost }) => {
  return (
    <Stack component="ul" spacing={2}>
      {posts.map(post => (
        <NewsItem key={post.id} post={post} onDeletePost={onDeletePost} />
      ))}
    </Stack>
  );
};

export default NewsList;
