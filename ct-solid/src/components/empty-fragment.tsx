export function EmptyFragment(props: unknown) {
  Object.assign(window, { props });
  return <>{[]}</>;
}
