import Link from 'next/link'

import { useBoardList } from '../src/hooks'

export default function BoardList() {
  const { boardList, isLoading, isError } = useBoardList()

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>failed to load</div>

  return (
  <div>
    {
      boardList.map((bg, i) => (
	<div key={i}>
	  <h1>{bg.name}</h1>
	  <ul>
	    {
	      bg.boardList.map((b, j) =>
		<li key={j}>
		  <Link href={{
		    pathname: '/server/[serverId]/board/[boardId]',
		    query: { serverId: b.serverId, boardId: b.boardId }
 		  }}
 		  >
		    {b.name}
		  </Link>
		</li>
	      )
	    }
	  </ul>
	</div>
      ))
    }
  </div>
  )
}
