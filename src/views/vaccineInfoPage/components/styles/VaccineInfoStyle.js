import styled from 'styled-components';

const VaccineInfoStyles = styled.div`

  .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
      margin-top: 40px;
      color: black;
    }
  }
  
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    
    button {
    background-color: darkcyan;
    border: 1px solid darkcyan;
    width: 100%;
    
      h2 {
        color: white;
      }
    }
  }
  
  .info-div {
    margin: 20px 10vw;
    font-family: "Eras Light ITC", sans-serif;
    
    h3 {
      font-weight: 700;
    }
    
    p {
      font-size: large;
    }
  }

  p#source-info {
    margin: 20px 0 0 30px;
  }
`;

export default VaccineInfoStyles;