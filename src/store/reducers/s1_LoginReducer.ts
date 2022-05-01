const initial = {}
type InitialType = typeof initial

type ActionLoginType = {
    type: string
}

export const loginReducer = (state: InitialType = initial,action: ActionLoginType): InitialType => {
    switch (action.type) {
        default:
            return state
    }
}