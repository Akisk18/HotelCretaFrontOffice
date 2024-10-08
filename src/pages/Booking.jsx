import PageHeading from "../ui/PageHeading";
import { useBooking } from "../features/useBooking";
import Spinner from "../ui/Spinner";
import { format } from "date-fns";
import { useMoveBack } from "../features/useMoveBack";
import { MdOutlineBedroomParent } from "react-icons/md";
import Button, { BackButton, ButtonDanger } from "../ui/Button";
import { ButtonRow } from "../ui/Form";
import { useSettings } from "../features/useSettings";
import { IoTicketOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useState } from "react";
import { useDeleteBooking } from "../features/useDeleteBooking";
import { useCheckin } from "../features/useCheckin";
import { useCheckout } from "../features/useCheckout";
import {
  Bold,
  BookingColumn,
  BookingHeading,
  BookingRow,
  Footer,
  HeadingContainer,
  Tag,
  TotalPrice,
} from "../ui/BookingLayout";

function Booking() {
  const moveBack = useMoveBack();
  const { isLoading, booking } = useBooking();
  const { settings: { allInclusive } = {} } = useSettings();
  const { checkin } = useCheckin();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const [isChecked, setIsChecked] = useState(false);

  if (!booking) return;
  const { id: bookingId } = booking;
  if (isLoading) return <Spinner />;
  const optionalAllInclusive =
    allInclusive * booking.numNights * booking.numGuests;

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  function handleCheckin() {
    checkin({ bookingId });
  }

  function handleCheckout() {
    checkout({ bookingId });
  }
  return (
    <div>
      <HeadingContainer>
        <BookingRow>
          <PageHeading>Booking #{bookingId}</PageHeading>

          <Tag>{booking.status}</Tag>
        </BookingRow>
        <BackButton onClick={moveBack}>&larr; Back</BackButton>
      </HeadingContainer>
      <BookingHeading>
        <BookingRow>
          <MdOutlineBedroomParent />
          {booking.numNights} nights on Room {booking.rooms.name}
        </BookingRow>{" "}
        {format(new Date(booking.startDate), "dd MMMM yyyy")} -{" "}
        {format(new Date(booking.endDate), "dd MMMM yyyy")}
      </BookingHeading>
      <BookingColumn>
        <BookingRow>
          <Bold>{booking.guests.fullName}</Bold> + {booking.numGuests} guests •{" "}
          {booking.guests.email} • National ID : {booking.guests.nationalID} •
          Nationality: {booking.guests.nationality}
        </BookingRow>
        <BookingRow>
          <IoTicketOutline />
          <Bold>All Inclusive? </Bold>
          {booking.hasAllInclusive ? "Yes" : "No"}
        </BookingRow>

        <BookingRow>
          <GiConfirmed />
          <Bold> {booking.isPaid ? "PAID" : "Will pay at property"}</Bold>
        </BookingRow>
        <BookingRow>
          <TotalPrice>
            <AiOutlineDollarCircle />
            <Bold> Total Price: {booking.totalPrice}$</Bold> (
            {booking.roomPrice}$ room +{" "}
            {booking.hasAllInclusive ? optionalAllInclusive : "0"}$ all
            inclusive)
          </TotalPrice>
        </BookingRow>
        <BookingRow>
          {!booking.isPaid ? (
            <form>
              <input
                checked={isChecked}
                onChange={handleCheckboxChange}
                type="checkbox"
              />
              <label>
                I confirm that {booking.guests.fullName} has paid the required
                ammount to stay at the hotel.
              </label>
            </form>
          ) : (
            ""
          )}
        </BookingRow>
        <Footer>
          Booked on: {format(new Date(booking.created_at), "dd MMMM yyyy")}
        </Footer>
      </BookingColumn>
      <ButtonRow>
        {booking.status === "unconfirmed" && (
          <Button
            onClick={handleCheckin}
            disabled={!booking.isPaid && !isChecked}
          >
            Check In
          </Button>
        )}
        {booking.status === "checked-in" && (
          <Button onClick={handleCheckout} disabled={isCheckingOut}>
            Check out
          </Button>
        )}

        <ButtonDanger
          disabled={isDeleting}
          onClick={() => {
            deleteBooking(booking.id);
            moveBack();
          }}
        >
          Delete
        </ButtonDanger>
      </ButtonRow>
    </div>
  );
}

export default Booking;
