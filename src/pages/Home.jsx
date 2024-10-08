import { useBookings } from "../features/useBookings";
import { useUser } from "../features/useUser";
import PageHeading from "../ui/PageHeading";
import { useCheckin } from "../features/useCheckin";
import { LuCalendarCheck } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import Spinner from "../ui/Spinner";
import { GiMoneyStack } from "react-icons/gi";
import {
  HomeBookings,
  HomeCheckin,
  HomeColumn,
  HomeLayoutRow,
  HomeSales,
  LatestActivity,
  LatestBooking,
  SVGBookings,
  SVGCheckin,
  SVGSales,
} from "../ui/HomeUI";

import { format } from "date-fns";
import { Tag } from "../ui/BookingLayout";

function Home() {
  const { user } = useUser();
  const { bookings = [], isLoading1 } = useBookings();
  const { checkin = [], isLoading2 } = useCheckin();
  const numBookings = bookings.length;
  const stays = checkin.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  if (!user || !bookings || !checkin) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  const isWorking = isLoading1 || isLoading2;

  if (isWorking) return <Spinner />;

  return (
    <>
      <div>
        <PageHeading>Welcome back {user.user_metadata.fullName}!</PageHeading>
      </div>
      <HomeColumn>
        <HomeLayoutRow>
          <HomeBookings>
            <SVGBookings>
              <IoBriefcaseOutline />
            </SVGBookings>
            <HomeColumn>
              {" "}
              <span>Bookings</span> <strong>{numBookings}</strong>
            </HomeColumn>
          </HomeBookings>
          <HomeCheckin>
            <SVGCheckin>
              <LuCalendarCheck />
            </SVGCheckin>
            <HomeColumn>
              {" "}
              <span>Check Ins</span>
              <strong> {stays}</strong>
            </HomeColumn>
          </HomeCheckin>
          <HomeSales>
            <SVGSales>
              <GiMoneyStack />
            </SVGSales>
            <HomeColumn>
              {" "}
              <span>Sales</span> <strong>{sales}$</strong>
            </HomeColumn>
          </HomeSales>
        </HomeLayoutRow>
        <PageHeading>Latest Activity</PageHeading>
        <LatestActivity>
          {bookings.length > 0 ? (
            bookings
              .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
              .slice(0, 5)
              .map((booking) => (
                <LatestBooking key={booking.id}>
                  {booking.guests?.fullName} &rarr; Room {booking.rooms.name}{" "}
                  &rarr; {format(new Date(booking.startDate), "dd/MM/yy")}{" "}
                  &mdash; {format(new Date(booking.endDate), "dd/MM/yy")}{" "}
                  <Tag>{booking.status}</Tag>
                </LatestBooking>
              ))
          ) : (
            <div>No bookings found</div>
          )}
        </LatestActivity>
      </HomeColumn>
    </>
  );
}

export default Home;
