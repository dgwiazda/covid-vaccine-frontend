import React from "react";

import styled from 'styled-components'

const Styles = styled.div`

  footer {
    background-color: #E4E4E1;
    background-image: linear-gradient(to top, rgba(0, 139, 139, 1) 0%, rgba(0, 139, 139, 0.5) 100%);
    width: 100%;
    height: 150px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
 
    h1 {
      color: white;
    }
    
    #copyright {
      font-weight: bold;
      color: white;
      border-top: 1px solid white;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
      width: 100%;
      padding: 5px 0;
    }
  }
  
  @media (max-width: 853px) {
    footer {
      height: 180px;
    }
  @media (max-width: 448px) {
    footer {
      height: 230px;
    }
  @media (max-width: 355px) {
    footer {
      height: 270px;
    }
  }

`;

function Footer() {

    return (
        <Styles>
            <footer>
                <h1>Aplikacja powstała na cele pracy magisterskiej</h1>
                <div id="copyright">
                    &copy; dgwiazda
                </div>
            </footer>
        </Styles>
    )
}

export default Footer;
