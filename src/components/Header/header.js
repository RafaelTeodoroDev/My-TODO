import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  color: var(--blue-500);

  margin-top: 2rem;
  
  display: flex;
  justify-content: space-between;
  
  padding: 1rem 2rem;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.04);
  border-radius: 6px;

  .logo{
    display: flex;
    align-items: center;
    gap: 0.75rem;

    h1{
      font-family: "Helvetica";
      font-size: 3rem;
    }

    .icon{
      font-size: 4rem;
      color: var(--red);
    }
  }

  .input-group{
    display: flex;
    align-items: center;
    gap: 1rem;

    input{
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.03);
      border-radius: 6px;

      width: 12rem;
      height: 2rem;

      outline: none;

      padding: 0 0.5rem;
      color: var(--blue-500);

      &::placeholder{
        color: #BCC6D3
;
      }
    }

    button{
      border: none;
      background: var(--blue-500);
      height: 2rem;
      border-radius: 6px;

      color: var(--white);
      padding: 0 0.5rem;

      cursor: pointer;

      .icon{
        font-size: 1.1rem;
      }
    }
  }
`