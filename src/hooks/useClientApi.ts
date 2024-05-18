import axios from 'axios';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

type REQ = {
  endPoint: string;
  key?: string;
  retry?: number;
  base?: string;
  timer?: number;
  revalidateTime?: number;
  initalPage?: number;
};

const createAxiosInstance = (baseURL?: string) => {
  const config = {
    baseURL: baseURL || process.env.NEXT_PUBLIC_BASE_URL,
    // headers: {
    //   Connection: "",
    //   "Accept-Language": Cookies.get("NEXT_LOCALE") || "en",
    //   "Accept-Location": Cookies.get("country") || "85",
    //   "Accept-Currency": Cookies.get("currency") || "1",
    //   "Accept-TimeZone": "Asia/Hebron",
    //   "Accept-NotificationEnabled": "no",
    //   "Accept-PageSize": "10",
    //    Authorization: "",
    // },
  };

  return axios.create(config);
};

export const useGetter = ({
  endPoint,
  key,
  timer,
  revalidateTime: revalidateTime,
  base,
}: REQ) =>
  useQuery({
    queryKey: [key],
    staleTime: timer || Infinity,
    retry: revalidateTime,
    queryFn: async () => {
      try {
        const req = await createAxiosInstance(base).get(endPoint);
        return req.data.data;
      } catch (error) {
        throw error;
      }
    },
  });

export const useSetter = ({ endPoint, key, retry, base }: REQ) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [key],
    retry,
    mutationFn: async (data: any) => {
      const response = await createAxiosInstance(base).post(endPoint, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};

export const useInfiniteScroll = ({
  endPoint,
  key,
  base,
  retry,
  initalPage,
}: REQ) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [key],
    retry,
    mutationFn: async (data: any) => {
      try {
        const response = await createAxiosInstance(base).post(
          `${endPoint}?page=${initalPage}`,
          data
        );
        queryClient.invalidateQueries({ queryKey: [key] });
        return response.data;
      } catch (error: any) {
        throw error;
      }
    },
  });
};
