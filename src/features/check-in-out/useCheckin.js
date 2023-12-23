import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { bookings } from "../../data/data-bookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCheckin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-in", isPaid: true }),
    onSuccess: (data) => {
      toast.success(`Booking # ${data.id} checked-in successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (error) => toast.error("There was an error while checking in"),
  });

  return { checkin, isCheckingIn };
};

export default useCheckin;
