import { useThreadList } from '../src/hooks'

interface props {
  serverId: string
  boardId: string  
}

export default function ThreadList({serverId, boardId}: props ) {
  const { threadList, isLoading, isError } = useThreadList(serverId, boardId)

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>failed to load</div>

  return (
  <>
    <h1>{serverId} {boardId}</h1>
    {JSON.stringify(threadList)}
  </>
  )
}
