import * as home from '../types/home-types';
const defaultState = {
	homeId:0,
	homeName:'tchome'
};
export const homeData = (state=defaultState,action={})=>{
	switch(action.type){
		case home.CHANGENAME:
			return {...state,...{homeName:action.newName}};
		default:
			return state;
	}
}