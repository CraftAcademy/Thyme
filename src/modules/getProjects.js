import axios from "axios";

const getProjects= async () => {
	const apiUrl = "https://demo.kimai.org/api/";
	const path = apiUrl + 'projects?visible=3';

	const user = JSON.parse(sessionStorage.current_user).username
	const password = JSON.parse(sessionStorage.current_user).password

	let headers = {
		"X-AUTH-USER": user,
		"X-AUTH-TOKEN": password,
	};
debugger;
	try {
		const resp = await axios.get(path, {
			headers: headers,
			mode: "cors"
		});
		return resp;
	} catch (error) {
		return error;
	}
};

export { getProjects };
