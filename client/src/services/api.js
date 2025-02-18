import axiosInstanse from "./instance";

async function loginUser(username, password) {
    try {
        const data = await axiosInstanse.post("/auth/login", {
            username,
            password
        })
        return data
    } catch (error) {
        console.log(error);
        throw error
    }
}

export {
    loginUser
}