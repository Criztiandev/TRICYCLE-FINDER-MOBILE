import useMutate from "@/common/hooks/query/useMutate";
import { ProtectedAxios } from "@/lib/axios/instances";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";

const useAcceptRequest = (id: string) => {
  const router = useRouter();
  const mutation = useMutate({
    queryKey: `booking-details-${id}`,
    mutationKey: [`booking-request-${id}`],
    mutationFn: async () =>
      await ProtectedAxios.patch(`/booking/request/accept/${id}`),

    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Booked Successfully",
      });
    },

    onError: () => {
      router.back();
    },
  });
  return { mutation };
};

export default useAcceptRequest;
