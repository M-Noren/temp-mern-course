import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto; /* centers */
    padding: 2rem 0; /* 2rem top bottom and 0 for left/right */
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr; 
      /* 2 columns are now created, with the first 
      holding the sidebars, "auto" ensures that the contents 
      of the sidebars is prioritized (assuming we set a min width). 
      The content of the sidebars shows fully and the 
      other column containing the navbar and 
      page content gets the remaining space */ 
    }
    .dashboard-page {
      width: 90%; /* instead of being 90% of the screen width, the page content is now 90% of the column (the 1fr) */
    }
  }
`;
export default Wrapper;
