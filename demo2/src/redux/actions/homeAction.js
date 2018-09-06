import * as home from '../types/home-types';
export const CHANGENAME = (newName)=>{
	console.log('homeAction running...(CHANGENAME)')
	return {
		type:home.CHANGENAME,
		newName
	}
}