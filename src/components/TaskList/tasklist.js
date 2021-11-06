import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1rem;

  .container{
    margin-top: 0.2rem;
    border-radius: 6px;
    background: var(--white);
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.04);

    height: 3rem;

    .completed{
      text-decoration: line-through;
    }

    .content{
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 1rem;

      button{
        border: none;
        background: none;
        cursor: pointer;

        .icon{
          color: var(--red);
          font-size: 1.3rem
        }
      }

      p{
        font-family: "Helvetica";
        font-size: 1.2rem;
      }

      .first-content{
        display: flex;
        align-items: center;
        gap: .5rem;

        button{
          width: 20px;
          height: 20px;
          background: none;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 50%;
        }
      }
    }
  }

  .verify-exists{
    border-radius: 6px;
    background: var(--white);
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.04);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem 0 2rem 0;

    h1{
      font-weight: normal;
      font-family: "Helvetica";
      font-size: 1rem;
    }

    .icon{
      font-size: 5rem;
      font-weight: normal;
      color: #C7B514;
    }
  }
`;