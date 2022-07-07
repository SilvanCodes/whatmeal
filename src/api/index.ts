import MEAL from "./meal";

// API primitives
const api = async (path: string, init: RequestInit) =>
    fetch(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}${path}`, {
        ...init,
        headers: {
            // uuid is set in src/index.ts
            'X-Session-UUID': window.sessionStorage.getItem('uuid') as string,
            ...init.headers
        }
    }).then(r => r.json()).catch(console.error);

const POST = async (path: string, data: object) => api(path, { method: 'POST', body: JSON.stringify(data) })

export default { POST };

// Entity APIs
export { MEAL };