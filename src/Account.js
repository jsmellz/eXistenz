import React, { useState } from 'react';
import styled from 'styled-components';
import accountPlaceholder from './assets/account-placeholder.png';

export const Account = () => {
    
    return (        
    
        <Styles>
            <div className="account-top">
                <div className="row account-circle-row ">
                    <div className="col account-circle text-center">
                        <img src={accountPlaceholder} className="img-circle"/>
                    </div>
                </div>
                <div className="row username-row">
                    <div className="col username-field text-center">username</div>
                </div>
            </div>
            <div className="row justify-content-center account-link">
                <div className="col-3 link-circle text-center"></div>
                <div className="col-9 link-field ">link</div>
            </div>
            <div className="row justify-content-center add-account-link">
                add link
            </div>
        </Styles>
    )
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

    .account-circle-row {
        height: 176px;
    }
    .account-circle {
        position:relative;
        background-color:#32363A;
        height: 103px;
        max-width: 103px;
        border-radius: 50%;
        margin-top:28px;
        margin-right: auto;
        margin-left: auto;
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
        margin-left: auto;
        height: 45px;
        max-width: 90%;
    }

    .account-link {
        color:white;
        align-items:center;
        background-color:#242527;
        height: 79px;
        width: 100%;
        margin-top: 20px;
        margin-right: auto;
        margin-left: auto;
        border-radius: 7px;
    }

    .link-circle {
        background-color:#32363A;
        height: 45px;
        max-width: 45px;
        border-radius: 50%;
        margin-right: auto;
        margin-left: auto;
    }

    .link-field {
        color: #A19E9E;
        line-height: 45px;
        border-radius: 7px;
        background-color:#32363A;
        margin-right: auto;
        height: 45px;
        width: 80%;
    }

    .add-account-link {
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