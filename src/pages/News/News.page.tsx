import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { getPostsService } from '@/services/posts.service';
import { PostType } from '@/types/post.type';
import Page from '@/components/Page';
import { NewsList } from '@/components/News';
import useFetch from '@/hooks/useFetch';
import { Typography } from '@mui/material';

// Я використовувал би для форми бібіліотеку RTK-Query якщо є redux у проєкті. (Чи react-query, якщо немає redux)
// Не додав пости в redux, так як немає сенсу (у данному випадку) його додавати. У redux повинні зберігатися загальні данні використовуємі в додатку.
// (В т / з не було цієї бібліотеки, тому зробив звичайним методом)

const NewsPage = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(1);
  const {
    data,
    executeFetch: getPosts,
    isLoading,
    error,
  } = useFetch(getPostsService);

  const loadMoreHandler = () => setPage(prev => prev + 1);
  const deletePostHandler = (postId: number) => {
    setPosts(prev => prev.filter(({ id }) => id !== postId));
  };

  useEffect(() => {
    getPosts(page);
  }, [page]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setPosts(prev => [...prev, ...data]);
    }
  }, [data]);

  return (
    <Page>
      {error && (
        <Typography variant="body1" textAlign="center">
          {error}
        </Typography>
      )}
      <NewsList posts={posts} onDeletePost={deletePostHandler} />
      {!error && (
        <LoadingButton
          onClick={loadMoreHandler}
          sx={{ mt: 2, mx: 'auto', display: 'flex', alignItems: 'center' }}
          variant="contained"
          loading={isLoading}
        >
          {t('posts.load_more')}
        </LoadingButton>
      )}
    </Page>
  );
};

export default NewsPage;
