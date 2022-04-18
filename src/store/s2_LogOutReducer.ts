const initial = {}
type InitialType = typeof initial

type ActionLogOutType = {
    type: string
}

export const logOutReducer = (state: InitialType = initial,action: ActionLogOutType): InitialType => {
    switch (action.type) {
        default:
            return state
    }
}