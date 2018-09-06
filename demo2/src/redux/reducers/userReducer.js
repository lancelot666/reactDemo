import * as user from '../types/user-types';
const defaultState = {
	userId:2,
	userName:'lancelothome'
};
export const userData = (state=defaultState,action={})=>{
	switch(action.type){
		case user.CHANGENAME:
			return {...state,...{name:action.newName}};
		default:
			return state;
	}
}