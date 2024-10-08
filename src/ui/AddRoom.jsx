import styled from "styled-components";
import Button from "./Button";

import { useCreateRoom } from "../features/useCreateRoom";
import { Div, Form, Label, Input, Row, ButtonRow } from "./Form";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { useEditRoom } from "../features/useEditRoom";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: 15px;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: 15px;
    border: none;
    color: #ecf0f1;
    background-color: #3498db;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: #34495e;
    }
  }
`;
function AddRoom({ roomToEdit = {}, isModalOpen, setIsModalOpen }) {
  const { id: editId, ...editValues } = roomToEdit || {};
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, setValue, reset, getValues, formState } =
    useForm({
      defaultValues: isEditSession ? editValues : {},
    });
  const { errors } = formState;
  const { isCreating, createRoom } = useCreateRoom();
  const { isEditing, editRoom } = useEditRoom();

  const isWorking = isEditing || isCreating;

  useEffect(() => {
    if (isEditSession) {
      Object.entries(editValues).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [reset, isEditSession, editValues]);

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editRoom(
        { newRoomData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            setIsModalOpen(false);
          },
        }
      );
    else
      createRoom(
        { ...data, image: data.image },
        {
          onSuccess: () => {
            reset();
            setIsModalOpen(false);
          },
        }
      );

    if (isCreating) return <Spinner />;
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Label error={errors?.name?.message}>Room name:</Label>
              <Input
                type="text"
                id="name"
                disabled={isCreating}
                {...register("name", {
                  required: "This field is required",
                })}
              />
            </Row>
            <Row>
              <Label error={errors?.maxCapacity?.message}>
                Maximum Capacity:
              </Label>
              <Input
                type="number"
                id="maxCapacity"
                disabled={isWorking}
                {...register("maxCapacity", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "Capacity should be at least 1",
                  },
                })}
              />
            </Row>
            <Row>
              <Label error={errors?.regularPrice?.message}>
                Regular Price:
              </Label>
              <Input
                type="number"
                id="regularPrice"
                disabled={isWorking}
                {...register("regularPrice", {
                  required: "This field is required",
                })}
              />
            </Row>
            <Row>
              <Label error={errors?.discount?.message}>Discount:</Label>
              <Input
                type="number"
                id="discount"
                defaultValue={0}
                disabled={isWorking}
                {...register("discount", {
                  required: "This field is required",
                  validate: (value) =>
                    value <= getValues().regularPrice ||
                    "Discount should be less than regular price",
                })}
              />
            </Row>
            <Row>
              <Label error={errors?.description?.message}>
                Add a description:
              </Label>
              <Input
                type="text"
                id="description"
                disabled={isWorking}
                {...register("description", {
                  required: "This field is required",
                })}
              />
            </Row>
            <Row>
              <FileInput
                id="image"
                accept="image/*"
                {...register("image", {
                  required: isEditSession ? false : "This field is required",
                })}
              />
            </Row>
            <ButtonRow>
              <Button disabled={isWorking}>
                {" "}
                {isEditSession ? "Edit" : "Add"}
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(!isModalOpen);
                }}
              >
                Cancel
              </Button>
            </ButtonRow>
          </Form>
        </Div>
      </Modal>
    </>
  );
}

export default AddRoom;
