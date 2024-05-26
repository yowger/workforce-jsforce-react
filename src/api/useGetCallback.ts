import { useQuery } from "@tanstack/react-query"

import { axiosPublic } from "../lib/axios"

import type { AxiosError } from "axios"
import type { MutateConfig } from "../lib/reactQuery"

export type CallbackResponse = {
    id: string
    name: string
    email: string
    verified: string
    createdAt: Date
}

type UseCallbackOptions = {
    code: string
    config?: MutateConfig<CallbackResponse>
}

const getCallback = (code: string): Promise<CallbackResponse> => {
    return axiosPublic.get("/oauth/callback", {
        params: { code: code },
    })
}

export const useGetCallback = ({ code, config }: UseCallbackOptions) => {
    return useQuery<CallbackResponse, AxiosError>({
        queryKey: ["callback", code],
        queryFn: () => getCallback(code),
        ...config,
    })
}
