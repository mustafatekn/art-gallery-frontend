import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json',
    },
});

interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await axiosInstance(config);
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
            throw error;
        } else {
            console.error('Unexpected error:', error);
            throw error;
        }
    }
};