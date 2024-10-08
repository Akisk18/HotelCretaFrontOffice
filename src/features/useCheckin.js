import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, allInclusive }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...allInclusive,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Succesfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("There was an error checking in"),
  });
  return { checkin, isCheckingIn };
}
