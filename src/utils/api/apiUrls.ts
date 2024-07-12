export const services = {
    getPosts: '/post',
    getPostByUrl: (url: string) => `/post/${url}`,
    sendTicket: '/ticket'
}