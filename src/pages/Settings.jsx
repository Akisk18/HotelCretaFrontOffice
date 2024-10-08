import { useEffect, useState } from "react";
import { useSettings } from "../features/useSettings";
import { useUpdateSetting } from "../features/useUpdateSettings";
import Button from "../ui/Button";
import { ButtonRow, Div, Form, Input, Label, Row } from "../ui/Form";
import PageHeading from "../ui/PageHeading";
import Spinner from "../ui/Spinner";

function Settings() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      allInclusive,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  const [minNights, setMinNights] = useState(minBookingLength);
  const [maxNights, setMaxNights] = useState(maxBookingLength);
  const [maxGuests, setMaxGuests] = useState(maxGuestsPerBooking);
  const [allIncluded, setAllIncluded] = useState(allInclusive);

  function handleSubmit(e) {
    e.preventDefault();
    updateSetting({
      minBookingLength: minNights,
      maxBookingLength: maxNights,
      maxGuestsPerBooking: maxGuests,
      allInclusive: allIncluded,
    });
  }

  useEffect(() => {
    setMinNights(minBookingLength);
    setMaxNights(maxBookingLength);
    setMaxGuests(maxGuestsPerBooking);
    setAllIncluded(allInclusive);
  }, [minBookingLength, maxBookingLength, maxGuestsPerBooking, allInclusive]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageHeading>Update Hotel Settings</PageHeading>

      <Div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Label>Mininum Nights / Booking: </Label>
            <Input
              type="number"
              value={minNights}
              onChange={(e) => setMinNights(e.target.value)}
            />
          </Row>
          <Row>
            <Label>Maximum Nights / Booking: </Label>
            <Input
              type="number"
              value={maxNights}
              onChange={(e) => setMaxNights(e.target.value)}
            />
          </Row>
          <Row>
            <Label>Maximum Guests / Booking:</Label>
            <Input
              type="number"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </Row>
          <Row>
            <Label>All Inclusive / day:</Label>
            <Input
              type="number"
              value={allIncluded}
              onChange={(e) => setAllIncluded(e.target.value)}
            />
          </Row>
          <ButtonRow>
            <Button type="submit" disabled={isUpdating}>
              Update
            </Button>
          </ButtonRow>
        </Form>
      </Div>
    </>
  );
}

export default Settings;
