import axios from 'axios'

export function login(obj)
{
    let response=axios.post("http://localhost:3000/login",obj)
    return response;
}
export function Register(obj)
{
    let response = axios.post("http://localhost:3000/register",obj)
    return response;
}