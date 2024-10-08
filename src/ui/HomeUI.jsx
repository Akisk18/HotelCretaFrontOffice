import styled from "styled-components";

export const HomeLayoutRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  font-size: 1.5rem;
`;
export const HomeColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeCheckin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #e0e7ff;

  width: 15rem;
  height: 5rem;
`;

export const HomeBookings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #e0f2fe;
  width: 15rem;
  height: 5rem;
`;

export const HomeSales = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #dcfce7;
  width: 15rem;
  height: 5rem;
`;

export const SVGBookings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 3rem;
  height: 3rem;

  & svg {
    color: #0369a1;
    width: 3rem;
    height: 3rem;
  }
`;

export const SVGCheckin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 3rem;
  height: 3rem;

  & svg {
    color: #4338ca;
    width: 3rem;
    height: 3rem;
  }
`;

export const SVGSales = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 3rem;
  height: 3rem;

  & svg {
    color: #15803d;
    width: 3rem;
    height: 3rem;
  }
`;

export const LatestActivity = styled.div`
  border: 2px solid #34495e;
  width: 80rem;
  height: 25rem;
  font-size: 1.6rem;
  background-color: #e0f2fe;
  color: #34495e;
`;

export const LatestBooking = styled.div`
  display: flex;
  padding: 20px 20px;
  gap: 2rem;
  align-items: center;
`;
