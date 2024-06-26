import {v1} from 'uuid'
import {FilterValuesType, TodolistType} from "../App";


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

type ActionChangeTodoAC = {
	type: 'CHANGE-TODOLIST-TITLE',
	payload: {
		id: string,
		title: string,
	},
}
type ActionChangeTodoFilterAC = {
	type: 'CHANGE-TODOLIST-FILTER',
	payload: {
		id: string
		filter: FilterValuesType,
	},
}

type ActionsType =
	| ActionRemovetodoAC
	| ActionAddAC
	| ActionChangeTodoAC
	| ActionChangeTodoFilterAC

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
		case "CHANGE-TODOLIST-TITLE": {
			return state.map(tl => tl.id === action.payload.id ? {...tl, title: action.payload.title} : tl)
		}
		case "CHANGE-TODOLIST-FILTER": {

			return state.map(tl => tl.id === action.payload.id ? {...tl, filter: action.payload.filter} : tl)

		}
		default:
			throw new Error("WRONG!")
	}
}
export const removeTodoAC =(id:string)=>{
	return{
		type: 'REMOVE-TODOLIST',
		payload: {
			id: id,
		},
	} as const
}
export const addTodoAC =(title:string)=>{
	return{
		type: 'ADD-TODOLIST',
		payload: {
			title: title,
		},
	} as  const
}
export const changeTitleTodoAC =(id: string, title:string)=>{
	return{
		type: 'CHANGE-TODOLIST-TITLE',
		payload: {
			id: id,
			title:title
		},
	}as const
}
export const changeFilterTodoAC =(id: string, filter:FilterValuesType)=>{
	return{
		type: 'CHANGE-TODOLIST-FILTER',
		payload: {
			id: id,
			filter: filter,
		},
	}as const
}
