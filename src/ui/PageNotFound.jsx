import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const EmptyLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  background-color: #ecf0f1;
`;

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <EmptyLayout>
      The page you are trying to access does not exist.{" "}
      <Button onClick={() => navigate("/")}>&larr; Go back</Button>
    </EmptyLayout>
  );
}

export default PageNotFound;
