type MultipleChildrenProps = {
  children?: [any, any, any];
}

export function MultipleChildren(props: MultipleChildrenProps) {
  return <div>
    <header>
      {props.children?.at(0)}
    </header>
    <main>
      {props.children?.at(1)}
    </main>
    <footer>
      {props.children?.at(2)}
    </footer>
  </div>
}
