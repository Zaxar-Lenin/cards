const initial = {}
type InitialType = typeof initial

type ActionTestType = {
    type: string
}

export const testReducer = (state: InitialType = initial,action: ActionTestType): InitialType => {
    switch (action.type) {
        default:
            return state
    }
}