import BoardList from './boardlist'

const style = {
  display: 'flex',
}

export default function Layout({ children }) {
  return (
    <div style={style}>
      <BoardList />

      <div>{children}</div>
    </div>
  )
}
