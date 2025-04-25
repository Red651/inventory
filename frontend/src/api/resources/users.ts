import { client } from '../axios';
import { User } from '../entities';

export async function getUserInfo() {
    const response = await client.get(`/auth/me`);
    return User.parse(response.data);
}