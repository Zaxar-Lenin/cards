const initial = {}
type InitialType = typeof initial

type ActionPassResType = {
    type: string
}

export const passRecovReducer = (state: InitialType = initial,action: ActionPassResType): InitialType => {
    switch (action.type) {
        default:
            return state
    }
}