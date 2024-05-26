import {v1} from 'uuid'
import {TodolistType} from "../App";


type ActionRemovetodoAC = {
	type: "REMOVE-TODOLIST"
	payload: {
		id: string
	}
}
type ActionAddAC = {
	type: 'ADD-TODOLIST',
	payload: {
		title: string
	}
}

type ActionsType = ActionRemovetodoAC | ActionAddAC

let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
	{id: todolistID1, title: 'What to learn', filter: 'all'},
	{id: todolistID2, title: 'What to buy', filter: 'all'},
]


export const todolistsReducer = (state: TodolistType[] = initialState, action: ActionsType): TodolistType[] => {
	switch (action.type) {
		case"REMOVE-TODOLIST": {
			return state.filter(tl => tl.id !== action.payload.id)
		}
		case"ADD-TODOLIST": {
			const newTodolist: TodolistType = {id: v1(), title: action.payload.title, filter: 'all'}
			return [...state, newTodolist]
		}
		default:
			throw new Error("WRONG!")
	}
}
