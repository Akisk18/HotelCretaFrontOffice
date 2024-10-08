import styled from "styled-components";
import { useBookings } from "../features/useBookings";
import PageHeading from "../ui/PageHeading";
import { DIV } from "./Rooms";
import { format } from "date-fns";
import Spinner from "../ui/Spinner";
import { IoEyeOutline } from "react-icons/io5";
import Button, {
  ButtonDanger,
  ButtonIcon,
  ButtonModalHeading,
} from "../ui/Button";
import { FiTrash2 } from "react-icons/fi";
import { useDeleteBooking } from "../features/useDeleteBooking";
import { useState } from "react";
import ConfirmDelete from "../ui/ConfirmDelete";
import { ButtonRow } from "../ui/Form";
import { useNavigate } from "react-router-dom";
import { Tag } from "../ui/BookingLayout";

const Table = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 1.2rem;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Bookings() {
  const { bookings, isLoading } = useBookings();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const [deleteModal, setDeleteModal] = useState(null);
  const validBookings = bookings || [];

  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  return (
    <div>
      <PageHeading>All Bookings</PageHeading>
      <DIV>
        <div>ROOM</div>
        <div>GUEST</div>
        <div>DATES</div>

        <div>STATUS</div>
        <div>AMOUNT</div>
        <div></div>
      </DIV>

      {validBookings.length > 0 ? (
        validBookings.map((booking) => (
          <>
            <Table key={booking.id}>
              <div>{booking.rooms?.name}</div>

              <Stack>
                <span>{booking.guests?.fullName}</span>
                <span>{booking.guests?.email}</span>
              </Stack>

              <div>
                {format(new Date(booking.startDate), "dd/MM/yy")}&mdash;
                {format(new Date(booking.endDate), "dd/MM/yy")}
              </div>
              <Tag>{booking?.status}</Tag>
              <div>{booking?.totalPrice}</div>
              <div>
                <ButtonIcon>
                  <IoEyeOutline
                    onClick={() => navigate(`/bookings/${booking.id}`)}
                  />
                </ButtonIcon>
                <ButtonIcon onClick={() => setDeleteModal(booking)}>
                  <FiTrash2 />
                </ButtonIcon>
              </div>
            </Table>
            <hr />

            <ConfirmDelete
              isOpen={deleteModal}
              onClose={() => setDeleteModal(false)}
            >
              <ButtonModalHeading>
                Are you sure you would like to delete this booking? this action
                cannot be undone.
              </ButtonModalHeading>
              <ButtonRow>
                <Button onClick={() => setDeleteModal(false)}>Cancel</Button>
                <ButtonDanger
                  disabled={isDeleting}
                  onClick={() => deleteBooking(booking.id)}
                >
                  Confirm
                </ButtonDanger>
              </ButtonRow>
            </ConfirmDelete>
          </>
        ))
      ) : (
        <div>No Bookings Found</div>
      )}
    </div>
  );
}

export default Bookings;
