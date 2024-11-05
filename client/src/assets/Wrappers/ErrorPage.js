import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh; /* Min height for the error content, 100% of the view height */
  text-align: center;
  display: flex; /* enables flex context */
  align-items: center; /* vertical alignment in this case */
  justify-content: center; /* horizontal alignment in this case */
  img {
    width: 90vw; /* 90% of the view width */
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
