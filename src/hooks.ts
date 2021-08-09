import useSWR from "swr";
import { BoardGroups, BoardList } from "./entity";

const origin = 'http://localhost:8080'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useBoardList() {
  const { data, error } = useSWR(`${origin}/boardList`, fetcher)

  return {
    boardList: convertBoardGroups(data),
    isLoading: !error && !data,
    isError: error,
  }
}

function convertBoardGroups(json: any): BoardGroups {
  if (!json) return []

  return json.board_groups.map((bg: any) => ({
    name: bg.name,
    boardList: convertBoardList(bg),
  }))
}

function convertBoardList(json: any): BoardList {
  if (json.board_list === undefined) {
    return []
  }

  return json.board_list.map((b: any) => ({
    name: b.name,
    serverId: b.server_id,
    boardId: b.board_id,
  }))
}

export function useThreadList(serverId: string, boardId: string) {
  console.log(serverId, boardId)
  const { data, error } = useSWR(`${origin}/${serverId}/${boardId}/threadList`, fetcher)

  console.log(data)

  return {
    threadList: data,
    isLoading: !error && !data,
    isError: error,
  }
}
