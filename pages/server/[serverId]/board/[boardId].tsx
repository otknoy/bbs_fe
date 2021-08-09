import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import Layout from '../../../../components/layout'
import ThreadList from '../../../../components/threadlist'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      board: "test",
    },
  }
}

export interface ServerSideProps {
  board: string
}

export default function Board({ board }: ServerSideProps) {
  const router = useRouter()
  const { serverId, boardId } = router.query

  return (
    <div>
      <Layout>
	<ThreadList serverId={serverId} boardId={boardId} />
      </Layout>
    </div>
  )
}
