import styled from "styled-components";

export const HeaderStyle = styled.div`
  .header {
    width: 100%;
    height: 55px;
    background-color: var(--color-primary-negative);
    padding: 0 50px 0 50px;
  }

  .divLogo {
    display: flex;
    gap: 10px;
  }

  .navBtn {
    color: var(--color-primary-focus);
    font-size: 18px;
  }
  .navMobile {
    background-color: var(--color-primary-negative);
  }
  .nameMOdal {
    height: 30px;
  }
  @media (max-width: 450px) {
    .logoName {
      display: none;
    }
  }
`;
