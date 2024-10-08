import styled from "styled-components";
import PageHeading from "./PageHeading";
import Button from "./Button";

const ErrorLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  background-color: #ecf0f1;
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <ErrorLayout>
      <PageHeading>Something went wrong</PageHeading>
      <p>{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </ErrorLayout>
  );
}

export default ErrorFallback;
