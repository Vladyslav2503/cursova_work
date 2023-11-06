import axios from "axios"

export const $api = {
    async getAllProducts() {
        try {
            debugger
            return await axios.get('http://localhost:3001/get')
        } catch {
            return null
        }

    }
}