import useSWR from "swr";
import { BoardGroups, BoardList } from "./entity";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useBoardList() {
  const { data, error } = useSWR('http://localhost:8080/boardList', fetcher)

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

