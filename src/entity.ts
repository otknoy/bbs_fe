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
