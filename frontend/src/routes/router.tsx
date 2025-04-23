import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AuthGuard } from '@/guards/auth-guard';
import { GuestGuard } from '@/guards/guest-guard';
import { AuthLayout } from '@/pages/layout/auth';
import { DashboardLayout} from '@/pages/layout/dashboard';
import { LazyPage } from './lazy-page';
import { paths } from './paths';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={paths.auth.login} replace />,
  },
  {
    path: paths.auth.root,
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        path: paths.auth.root,
        element: <Navigate to={paths.auth.login} replace />,
      },
      {
        path: paths.auth.login,
        element: LazyPage(() => import('@/pages/auth/login')),
      },
      // {
      //   path: routes.auth.resetPassword,
      //   element: LazyPage(() => import('@/pages/auth/reset-password')),
      // },
      // {
      //   path: paths.auth.otp,
      //   element: LazyPage(() => import('@/pages/auth/otp')),
      // },
      // {
      //   path: routes.auth.terms,
      //   element: LazyPage(() => import('@/pages/auth/terms')),
      // },
      // {
      //   path: routes.auth.privacy,
      //   element: LazyPage(() => import('@/pages/auth/privacy')),
      // },
    ],
  },
  {
    // path: paths.view.root,
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: paths.dashboard.root,
        children: [
          {
            path: paths.dashboard.root,
            element: <Navigate to={paths.dashboard.home} replace />,
          },
          {
            path: paths.dashboard.home,
            element: LazyPage(() => import('@/pages/dashboard')),
          }
        ]
      },
    ]
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
