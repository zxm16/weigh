import service from '@/utils/http.js'


export function Login(data){
	return service({
		url:'user/main',
		method:'GET',
	})
	
}