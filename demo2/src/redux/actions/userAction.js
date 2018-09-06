import * as user from '../types/user-types';
export const CHANGENAME = (newName)=>{
	console.log('userAction running...(CHANGENAME)')
	return {
		type:user.CHANGENAME,
		newName
	}
}