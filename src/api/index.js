import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://api-ai.bezel.vn',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        // 'x-rapidapi-host':'alpha-vantage.p.rapidapi.com',
        // 'x-rapidapi-key': process.env.RAPIDAPI_KEY
    }
});
export default {
    FaceDetection: (image) =>
    instance({
        'method': 'POST',
        'url':'/faces',
        'data': {
            'image':image,
        },
    })
}