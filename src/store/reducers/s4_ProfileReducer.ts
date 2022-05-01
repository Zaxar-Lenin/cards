const initial = {}
type InitialType = typeof initial

type ActionProfileType = {
    type: string
}

export const profileReducer = (state: InitialType = initial,action: ActionProfileType): InitialType => {
    switch (action.type) {
        default:
            return state
    }
}