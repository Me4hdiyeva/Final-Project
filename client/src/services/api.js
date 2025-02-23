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
        return data.coins
    } catch (error) {
        console.log(error);
        return error
    }
}


export {
    loginUser, verifyToken, getCoins, getUserById, addToBalance, buyCripto, getAllUserCoins
}