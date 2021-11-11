const BACKEND = 'https://silvancodes.builtwithdark.com';

const api = async (path: string, init: RequestInit) =>
    fetch(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}${path}`, init).then(r => r.json()).catch(console.error);

const GET = async (path: string) => api(path, { method: 'GET' })
const POST = async (path: string, data: object) => (console.log(data), api(path, { method: 'POST', body: JSON.stringify(data) }))
const DELETE = async (path: string, data: object) => api(path, { method: 'DELETE', body: JSON.stringify(data) })

export { GET, POST, DELETE };