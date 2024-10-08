import styled from "styled-components";

export const BookingHeading = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #3498db;
  color: #ecf0f1;
  height: 4rem;
  align-items: center;

  padding: 0px 10px;
  gap: 40rem;
  font-size: 1.6rem;
`;

export const BookingRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 1.2rem;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 62rem;
`;

export const BookingColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
`;
export const Tag = styled.span`
  background-color: #3498db;
  color: #ecf0f1;
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 20px;
  padding: 5px;
`;

export const TotalPrice = styled.span`
  background-color: #dcfce7;
  color: #15803d;
  border: 5px solid #dcfce7;
  padding: 1.4rem;
`;
export const Bold = styled.span`
  font-weight: 700;
`;
