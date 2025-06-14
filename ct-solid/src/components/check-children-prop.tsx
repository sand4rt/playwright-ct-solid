import { type ParentProps } from 'solid-js';

type DefaultChildrenProps = ParentProps<{}>;

export function CheckChildrenProp(props: DefaultChildrenProps) {
  return <>{'children' in props ? props.children : 'No Children'}</>
}
