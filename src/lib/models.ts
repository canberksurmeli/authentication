export type UserList = {
    id: string
    name: string
    job: string
}

export type UserListResponse = {
    paging: {
        take: number
        skip: number
    }
    data: UserList[]
}
