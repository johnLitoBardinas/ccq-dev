import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
  },
  {
    path: 'ccq',
  },
  {
    path: 'inbound',
  },
  {
    path: 'outbound',
  },
  {
    path: '*',
  },
]);

export default router;
// Currently not used, but can be utilized in the future for routing
