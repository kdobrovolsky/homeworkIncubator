import {initialPeople, UserType} from "../HW8";


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
          const sortedState = [...state].sort((a,b) => {
              if(action.payload === 'up'){
                  return a.name.localeCompare(b.name)
              }else {
                  return b.name.localeCompare(a.name)
              }
          })
            return sortedState

        }
        case 'check': {

            return state.filter((t) => t.age >= action.payload)
        }
        default:
            return state
    }
}
