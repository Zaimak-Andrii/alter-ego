import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from 'components/layouts';
import { routes } from '@/constants';
import { PrivatePage, RestrictPage } from 'pages/Access';

const HomePage = lazy(() => import(`pages/Home`));
const ProfilePage = lazy(() => import(`pages/Profile`));
const NewsPage = lazy(() => import(`pages/News`));
const LoginPage = lazy(() => import(`pages/Login`));
const NotFoundPage = lazy(() => import(`pages/NotFound`));

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.NEWS} element={<NewsPage />} />
          <Route
            path={routes.PROFILE}
            element={
              <PrivatePage
                redirectTo={routes.LOGIN}
                component={<ProfilePage />}
              />
            }
          />
          <Route
            path={routes.LOGIN}
            element={
              <RestrictPage
                redirectTo={routes.PROFILE}
                component={<LoginPage />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
