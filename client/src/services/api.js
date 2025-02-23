import axios from "axios";
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

async function deleteUser() {
    try {
        const data = await axiosInstanse.delete(`/auth/users/${localStorage.getItem("userid")}`)
        return data
    } catch (error) {
        console.log(error);
        throw error
    }
}


async function updateUserNickname(userId, username) {
    try {
        const response = await axiosInstanse.put(`/auth/users/username/${userId}`, { username });
        return response.data;
    } catch (error) {
        console.error("Nickname yenilənərkən xəta baş verdi:", error.response?.data || error.message);
        throw error;
    }
}

async function updateUserEmail(userId, email) {
    try {
        const response = await axiosInstanse.put(`/auth/users/email/${userId}`, { email });
        return response.data;
    } catch (error) {
        console.error("E-poçt yenilənərkən xəta baş verdi:", error.response?.data || error.message);
        throw error;
    }
}

async function updateUserPassword(userId, currentPassword, newPassword) {
    try {
        const response = await axiosInstanse.put(`/auth/users/password/${userId}`, {
            currentPassword,
            newPassword
        });
        return response.data;
    } catch (error) {
        console.error("Parol yenilənərkən xəta baş verdi:", error.response?.data || error.message);
        throw error;
    }
}

async function verifyToken() {
    try {
        const verify = await axiosInstanse.get("/auth/verify-token")
        return verify.data
    } catch (error) {
        console.log(error);
        return error
    }
}

async function getCoins(param) {
    let x = param
    if (!param) {
        x = 0
    }
    try {
        const verify = await axiosInstanse.get(`/coins?criptoId=${x}`)
        return verify.data
    } catch (error) {
        console.log(error);
        return error
    }
}

async function getUserById(id) {
    try {
        const user = await axiosInstanse.get(`/auth/users/${id}`)
        let data = {}
        if (user.data.accessToken) {
            const melumat = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: { Authorization: `Bearer ${user.data.accessToken}` }
            });
            data = melumat.data
        }
        return {
            ...user.data,
            ...data,
            profileImage: data?.picture
        }
    } catch (error) {
        console.log(error);
        return error
    }
}

async function addToBalance(id, amount) {
    try {
        const { data } = await axiosInstanse.put(`/auth/users/${id}`, { amount })
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}

async function buyCripto(user, type, count, currency) {
    try {
        console.log(user, type, count, currency);

        const { data } = await axiosInstanse.post(`/cripto`,
            { type, count, currency, user }
        )
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}

async function getAllUserCoins() {
    try {
        const { data } = await axiosInstanse.get(`/cripto/${localStorage.getItem("userid")}`)
        return data?.coins
    } catch (error) {
        console.log(error);
        return error
    }
}

async function sellUserCoin(userId, type, count, currency) {
    try {
        const { data } = await axiosInstanse.put(`/cripto`, { userId, type, count, currency })
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}


async function editProfileImg(userId, file) {
    try {
        const formData = new FormData();
        formData.append("image", file); 

        const { data } = await axios.post(
            `http://localhost:3000/api/upload/${userId}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return data;
    } catch (error) {
        console.error("Şəkil yüklənərkən xəta:", error);
        return error.response ? error.response.data : error;
    }
}



export {
    loginUser, verifyToken, getCoins, getUserById, addToBalance, buyCripto, getAllUserCoins, sellUserCoin,
    deleteUser , updateUserNickname ,updateUserEmail ,updateUserPassword, editProfileImg
}