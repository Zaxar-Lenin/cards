const initial = {}
type InitialType = typeof initial

type ActionPassEnteringType = {
    type: string
}

export const passEnteringReducer = (state: InitialType = initial,action: ActionPassEnteringType): InitialType => {
    switch (action.type) {
        default:
            return state
    }
}