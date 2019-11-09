import React from 'react'
import styled from 'styled-components';
import accountPlaceholder from './assets/account-placeholder.png';
import { useAccounts } from './Hooks'
import { Container } from 'react-bootstrap';

export const Connections = () => {
    
    const accounts = useAccounts();
    return (
    <Styles>
            <div className="row justify-content-center add-connection">
                + new connection
            </div>
            { accounts.map((account) => 
                    <div className="row justify-content-center username-row" key={account.id}>
                        <div className="col-3 connection-circle ">
                            <img src={accountPlaceholder} className="img-circle"/>
                        </div>
                        <div className="col-9 username-field">{account.username}</div>
                    </div>
            )
            }

        </Styles>)
}

const Styles = styled.div`
    .account-top {
        background-color:#242527;
        height: 264px;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        border-radius: 7px;
    }

    .img-circle {
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        width:100%;
        height:100%;
    }

    .username-row {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

    .username-field {
        color: #A19E9E;
        line-height: 45px;
        border-radius: 7px;
        background-color:#32363A;
        margin-right: auto;
        height: 45px;
        max-width: 90%;
    }

    .username-row {
        color:white;
        align-items:center;
        background-color:#242527;
        height: 79px;
        width: 100%;
        margin-top: 15px;
        margin-right: auto;
        margin-left: auto;
        border-radius: 7px;
    }

    .connection-circle {
        position:relative;
        background-color:#32363A;
        height: 45px;
        max-width: 45px;
        border-radius: 50%;
        margin-right: auto;
        margin-left: auto;
    }

    .username-field {
        color: #A19E9E;
        line-height: 45px;
        border-radius: 7px;
        background-color:#32363A;
        margin-right: auto;
        height: 45px;
        width: 80%;
    }

    .add-connection {
        margin-bottom: 50px;
        color: #A19E9E;
        align-items:center;
        background-color:clear;
        border-style:solid;
        border-color:#A19E9E;
        border-width:1px;
        height: 50px;
        width: 100%;
        margin-top: 20px;
        margin-right: auto;
        margin-left: auto;
        border-radius: 7px;
    }

`