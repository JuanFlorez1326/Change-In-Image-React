import React, { useState, useEffect } from "react";
import image from '../../../Images/1.png'
import './MainUI.css'

export const MainUI = () => {

    const [accountant, setAccountant] = useState(0)

    const haddleAdd = () => {
        setAccountant(accountant + 5)
    }

    const haddleReset = () => {
        setAccountant(0)
    }

    const haddleSubtract = () => {
        setAccountant(accountant - 5)
    }

    useEffect(() => {
        const img = document.getElementById('zenitsu');

        if (accountant >= 20) {

          img.classList.remove('filterInactivo');
          img.classList.add('filterActivo')

        } else {

          img.classList.remove('filterActivo');
          img.classList.add('filterInactivo')

        }
    },[accountant]);

    return (

        <div className="divGeneral">
            <header>
                <h1>Change In Image</h1>
            </header>

            <main>
                <img src={image} alt="zenitsu" className="imgZenitsu" id="zenitsu"/>
                <p id="classAccountant">{accountant}</p>
                <div className="divButton">
                    <button id="btnAdd" onClick={haddleAdd}> + </button>    
                    <button id="btnReset" onClick={haddleReset}> Reset </button>    
                    <button id="btnSubstract" onClick={haddleSubtract}> - </button>
                </div>
            </main>

            <footer>
                <h3>Juan Pablo Patiño. All Right Reserved  &copy;.</h3>
            </footer>
        </div>
    )
}