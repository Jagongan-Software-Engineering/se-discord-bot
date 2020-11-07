const axios = require('axios').default

const AxiosService = async(url) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const response = await axios.get(url)
            if(response.status === 200){
                return resolve(response.data);
            }
            return reject(response.data);
        } catch (error) {
            return reject(error);
        }
    })
}

module.exports = AxiosService;