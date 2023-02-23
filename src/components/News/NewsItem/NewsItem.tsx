import { FC } from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PostType } from '@/types/post.type';
import { deletePostService } from '@/services/posts.service';
import { useTranslation } from 'react-i18next';
import useFetch from '@/hooks/useFetch';

type NewsItemPropsType = {
  post: PostType;
  onDeletePost: (postId: number) => void;
};

const NewsItem: FC<NewsItemPropsType> = ({ post, onDeletePost }) => {
  const { title, body } = post;
  const { t } = useTranslation();
  const {
    isLoading,
    error,
    executeFetch: deletePost,
  } = useFetch(deletePostService);

  const deleteHandler = async () => {
    await deletePost(post.id);
    onDeletePost(post.id);
  };

  return (
    <Paper component="li" key={post.id} sx={{ p: 2 }}>
      <Typography variant="h5">{title}</Typography>
      <Typography>{body}</Typography>
      <Divider sx={{ my: 2 }} />
      <LoadingButton
        variant="contained"
        sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}
        loading={isLoading}
        onClick={deleteHandler}
      >
        {t('posts.delete')}
      </LoadingButton>
      {error && (
        <Typography color="red" variant="body2">
          {error}
        </Typography>
      )}
    </Paper>
  );
};

export default NewsItem;
