import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import Layout from '../../../../components/layout'

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
	<h1>{ serverId } { boardId }</h1>
	<span>{ board }</span>
      </Layout>
    </div>
  )
}
