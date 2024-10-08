import styled from "styled-components";
import { useRooms } from "../features/useRooms";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import AddRoom from "../ui/AddRoom";
import { useDeleteRoom } from "../features/useDeleteRoom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Button, {
  ButtonDanger,
  ButtonIcon,
  ButtonModalHeading,
} from "../ui/Button";
import ConfirmDelete from "../ui/ConfirmDelete";
import { ButtonRow } from "../ui/Form";
import PageHeading from "../ui/PageHeading";

export const DIV = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #3498db;
  align-items: center;
  color: #ecf0f1;
  height: 3rem;

  border: 1px solid #34495e;
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1) translateX(-7px);
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
  transform: translateX(-90px);
  padding: 3px;
  margin-left: 35px;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const DivT = styled.div`
  transform: translateX(-70px);
`;

function Rooms() {
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { rooms, isLoading } = useRooms();
  const [roomToEdit, setRoomToEdit] = useState(null);
  const { deleteRoom, isDeleting } = useDeleteRoom();
  const validRooms = rooms || [];

  if (isLoading) return <Spinner />;

  function handleEditRoom(room) {
    setRoomToEdit(room);
    setIsAddEditModalOpen(true);
  }

  function handleAddRoom() {
    setRoomToEdit(null);
    setIsAddEditModalOpen(true);
  }

  function handleDeleteRoom(room) {
    deleteRoom(room.id);
    setIsDeleteModalOpen(false);
  }
  return (
    <div>
      <PageHeading>All Rooms</PageHeading>
      <DIV>
        <div>ROOM</div>
        <div>CAPACITY</div>
        <div>PRICE</div>

        <DivT>DISCOUNT</DivT>
        <div></div>
      </DIV>

      {validRooms.length > 0 ? (
        validRooms.map((room) => (
          <>
            <Flex key={room.id}>
              <DivRow>
                <Img src={room.image} />
                <div>{room.name}</div>
              </DivRow>{" "}
              <div> Fills up to {room.maxCapacity} guests</div>
              <div>{room.regularPrice}$</div>
              <div>{room.discount ? room.discount : <span>&mdash;</span>}</div>
              <div>
                <ButtonIcon>
                  <FiEdit onClick={() => handleEditRoom(room)} />
                </ButtonIcon>
                <ButtonIcon>
                  <FiTrash2
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                    }}
                  />
                </ButtonIcon>
              </div>
            </Flex>

            <hr />
            <ConfirmDelete
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
            >
              <ButtonModalHeading>
                Are you sure you would like to delete this room? This action
                cannot be undone.
              </ButtonModalHeading>
              <ButtonRow>
                <Button onClick={() => setIsDeleteModalOpen(false)}>
                  Cancel
                </Button>
                <ButtonDanger
                  disabled={isDeleting}
                  onClick={() => handleDeleteRoom(room)}
                >
                  Confirm
                </ButtonDanger>
              </ButtonRow>
            </ConfirmDelete>
          </>
        ))
      ) : (
        <div>No available Rooms</div>
      )}
      <Button onClick={() => handleAddRoom(rooms)}>New Room</Button>
      {isAddEditModalOpen && (
        <AddRoom
          roomToEdit={roomToEdit}
          isModalOpen={isAddEditModalOpen}
          setIsModalOpen={setIsAddEditModalOpen}
        />
      )}
    </div>
  );
}

export default Rooms;
