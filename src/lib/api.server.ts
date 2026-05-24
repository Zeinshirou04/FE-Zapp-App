import axios from 'axios'

/**
 * Server-side only API client.
 * Never import this in a Client Component — API_SECRET_KEY must never reach the browser.
 * Use only in Server Components, Route Handlers, or server actions.
 */
const apiServer = axios.create({
    baseURL: process.env.API_BASE_URL ?? 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
    },
})

export default apiServer
