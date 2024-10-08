import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBookings() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", bookingId],
    queryFn: () => getBookings(bookingId),
  });

  return { isLoading, error, bookings, count };
}
