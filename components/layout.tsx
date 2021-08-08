import BoardList from './boardlist'

export default function Layout({ children }) {
  return (
    <>
      <header>
	header
      </header>

      <BoardList />

      <div>{children}</div>
      
      <footer>
	footer
      </footer>
    </>
  )
}
