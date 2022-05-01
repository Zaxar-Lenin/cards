const initial = {}
type InitialType = typeof initial

type ActionErrorType = {
    type: string
}

export const errorReducer = (state: InitialType = initial,action: ActionErrorType): InitialType => {
    switch (action.type) {
        default:
            return state
    }
}