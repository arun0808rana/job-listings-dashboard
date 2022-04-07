import styled from "styled-components/macro";

const Wrapper = styled.div`
  max-width: 576px;
  margin: auto;
  /* padding: 3rem 1rem; */
  .recommendation-card {
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 1rem;
    max-width: 271px;
    width: 100%;
    margin: 0.5rem;
    background-color: #fff;
    &:hover {
      border: 2px solid #d8e7fd;
      background-color: #e9f2ff;
    }

    .company-name {
      font-weight: 500;
    }
    .designation {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #4f4f4f;
    }
    .favorite {
      img {
        margin-left: auto;
        width: 25px;
        cursor: pointer;
      }
    }
    .posting-date {
      color: #9a9a9a;
      font-size: 12px;
    }
  }

  .main-job-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 16px;
    margin: 1rem 8px;
    .rhs {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .text {
        font-family: "Roboto";
        .title {
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
        .designation {
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #4f4f4f;
        }
        .salary {
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          color: #828282;
        }
      }
    }
  }
`;
export default Wrapper;
