import API from "./package";

// 请求拦截器
API.interceptors.request.use(
    (config) => {
        const configs = config
        configs.headers['My-Header'] = '123'
        return configs
    },
    (error) => {
        throw error;
    },
)

// 响应拦截器
API.interceptors.response.use(
    (response) => {
        if(!response.data.code){
            return response
        }
        if(response.data.code !== 200){
            throw(response.data.msg)
        }
        return response.data
    },
    (error) => {
        throw error
    }
)

const baseUrl = 'https://mock.presstime.cn/mock/6466ecee2801fe040f0d49e3/myApi'
export default {
    getData: () => API.GET(`${baseUrl}/getData`)
}