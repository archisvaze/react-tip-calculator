import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setAmount, setTipPercent, setPeople, setTipAmount, setTotal, setText } from '../slices/mySlice';

export default function Main() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState)



    function calcluateTip() {
        if (state.text === "CALCULATE") {
            let totalBill = Number(state.amount);
            let totalBillwTip = totalBill + (totalBill * Number(state.tipPercent)) / 100;

            let tipPerPerson = (totalBillwTip - totalBill) / Number(state.people);
            tipPerPerson = tipPerPerson.toFixed(2)

            let totalPerPerson = totalBillwTip / Number(state.people);
            totalPerPerson = totalPerPerson.toFixed(2)

            dispatch(setTipAmount(tipPerPerson));
            dispatch(setTotal(totalPerPerson));
            dispatch(setText("RESET"))
        }
        else {
            dispatch(setTipAmount(0));
            dispatch(setAmount(0));
            dispatch(setTotal(0));
            dispatch(setTipPercent(0))
            dispatch(setPeople(1))
            dispatch(setText("CALCULATE"))
        }

    }
    return (
        <div className={'main-container'}>
            <h3>SPLI<br />TTER</h3>
            <div className="container">

                <div className="actions-container">

                    <div className="top">
                        <p className="action-text">Bill</p>
                        <input onChange={(e) => {
                            dispatch(setAmount(e.target.value));
                        }}
                            className='input amount-input' type="number" value={state.amount} min={0} />
                    </div>

                    <div className="middle">
                        <p className="action-text">Select Tip %</p>
                        <div className="buttons-container">
                            <button
                                onClick={(e) => {
                                    dispatch(setTipPercent(5))
                                }}
                                style={{
                                    backgroundColor: state.tipPercent === 5 ? "#26c2ad" : "#00474b ",
                                    color: state.tipPercent === 5 ? "#00474b" : "white"
                                }}

                                className="percent-btn">5%</button>
                            <button
                                onClick={(e) => {
                                    dispatch(setTipPercent(10))
                                }}
                                style={{
                                    backgroundColor: state.tipPercent === 10 ? "#26c2ad" : "#00474b ",
                                    color: state.tipPercent === 10 ? "#00474b" : "white"
                                }}
                                className="percent-btn">10%</button>
                            <button
                                onClick={(e) => {
                                    dispatch(setTipPercent(15))
                                }}
                                style={{
                                    backgroundColor: state.tipPercent === 15 ? "#26c2ad" : "#00474b ",
                                    color: state.tipPercent === 15 ? "#00474b" : "white"
                                }}
                                className="percent-btn">15%</button>
                            <button
                                onClick={(e) => {
                                    dispatch(setTipPercent(25))
                                }}
                                style={{
                                    backgroundColor: state.tipPercent === 25 ? "#26c2ad" : "#00474b ",
                                    color: state.tipPercent === 25 ? "#00474b" : "white"
                                }}
                                className="percent-btn">25%</button>
                            <button
                                onClick={(e) => {
                                    dispatch(setTipPercent(50))
                                }}
                                style={{
                                    backgroundColor: state.tipPercent === 50 ? "#26c2ad" : "#00474b ",
                                    color: state.tipPercent === 50 ? "#00474b" : "white"
                                }}
                                className="percent-btn">50%</button>
                            <input
                                onChange={(e) => {
                                    dispatch(setTipPercent(e.target.value))
                                }}
                                type="number" className="custom-input" placeholder='Custom' min={0} />
                        </div>
                    </div>

                    <div className="bottom">
                        <p className="action-text">Number of People</p>
                        <input onChange={(e) => {
                            dispatch(setPeople(e.target.value))
                        }} className='input people-input' type="number" value={state.people} min={1} />
                    </div>

                </div>

                <div className="display-container">
                    <div className="display-top">
                        <div className="tip-amount-container">
                            <div className="text-container">
                                <p className="tip-amount">Tip Amount</p>
                                <p className="person">/ person</p>
                            </div>
                            <p className="tip">${state.tipAmount}</p>
                        </div>

                        <div className="tip-amount-container">
                            <div className="text-container">
                                <p className="tip-amount">Total</p>
                                <p className="person">/ person</p>
                            </div>
                            <p className="tip">${state.total}</p>
                        </div>
                    </div>

                    <button onClick={() => {
                        calcluateTip()
                    }} className="reset-btn">{state.text}</button>


                </div>

            </div>
        </div>
    )
}
