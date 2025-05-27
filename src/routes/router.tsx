import { createBrowserRouter } from 'react-router';
import App, { appLoader } from '../views/App';
import Detail, { detailLoader } from '../views/Detail';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
    loader: detailLoader,
  },
]);