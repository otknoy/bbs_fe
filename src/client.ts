export type BoardGroups = BoardGroup[]

export type BoardGroup = {
  name: string,
  boardList: BoardList,
}

export type BoardList = Board[]

export type Board = {
  name: string,
  serverId: string,
  boardId: string,
}

export const getBoardList = async () => {
  const response = await fetch("http://localhost:8080/boardList")
  const json = await response.json()
  
  return convertBoardGroups(json)
}

function convertBoardGroups(json: any): BoardGroups {
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

