import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import useAccountDetails from "@/feature/account/hooks/useAccountDetails";
import LoadingScreen from "@/layout/screen/LoadingScreen";
import ErrorScreen from "@/layout/screen/ErrorScreen";
import { useAuth } from "@/providers/AuthProvider";
import { ArrowLeft } from "lucide-react-native";
import AccountDetails from "@/feature/account/component/AccountDetails";
import BookingRequestDetails from "@/feature/account/component/BookingRequestDetails";
import useBookingDetailsThruRequest from "@/feature/booking/hooks/useBookingDetailsThruRequest";

const RootScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { data, isLoading, isError, error } = useBookingDetailsThruRequest(
    id as string
  );

  if (isLoading) return <LoadingScreen />;
  if (isError) {
    return <ErrorScreen error={error} />;
  }

  return (
    <>
      <DetailsHeader />
      <View className="bg-white flex-1 p-4">
        <BookingRequestDetails requestId={id} {...data} />
      </View>
    </>
  );
};

export default RootScreen;
const DetailsHeader: React.FC = () => {
  const router = useRouter();
  return (
    <Stack.Screen
      options={{
        title: "Account Details",
        headerLeft: () => (
          <TouchableOpacity className="mr-4" onPress={() => router.back()}>
            <ArrowLeft color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  );
};
