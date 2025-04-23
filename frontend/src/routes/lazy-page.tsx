import { LoadingScreen } from '@/components/loading-screen';
import { ComponentType, ElementType, Suspense, lazy } from 'react';

const Loadable = (Component: ElementType) => (props: object) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export function LazyPage(callback: () => Promise<{ default: ComponentType<object> }>) {
  const Component = Loadable(lazy(callback));
  return <Component />;
}
