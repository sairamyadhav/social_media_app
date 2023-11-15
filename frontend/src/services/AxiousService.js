import axios from 'axios';

export default async function AxiosService(url, state, data, setLoading = null) {

    if (state === 'get') {
        console.log(data)
        const response = await axios.get(url, {
            params: data
        });
        if (setLoading) { setLoading(false) }
        return response
    }
    else {
        console.log(url)
        const response = await axios.post(url, data, {withCredentials: true});
        if (setLoading) { setLoading(false) }
        return response

    }

}