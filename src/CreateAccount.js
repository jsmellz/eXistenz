import React, { useState } from 'react';
import styled from 'styled-components';
import { useAccounts } from './Hooks'
import accountPlaceholder from './assets/account-placeholder.png';
import { Button } from 'react-bootstrap';
import firebase from './firebase'

export const CreateAccount = () => {
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [linkOne, setLinkOne] = useState('');
    const [linkTwo, setLinkTwo] = useState('');
    const [linkThree, setLinkThree] = useState('');

    function submitAccount(e) {
        e.preventDefault()

        var links = []

        if (linkOne != '') {
            links.push(linkOne)   
        }

        if (linkTwo != '') {
            links.push(linkTwo)   
        }

        if (linkThree != '') {
            links.push(linkThree)   
        }

        firebase
            .firestore()
            .collection('accounts')
            .add({
                username,
                address,
                imageUrl,
                links
            })
            .then(() => {
                setUsername('')
                setAddress('')
                setImageUrl('')
                setLinkOne('')
                setLinkTwo('')
                setLinkThree('')
            })
    }

    return (        
    
        <Styles>
            <form>
            <div className="account-top">
                <div className="row account-circle-row ">
                    <div className="col account-circle text-center">
                        <img src={accountPlaceholder} className="img-circle"/>
                    </div>
                </div>
                <div className="row username-row">
                    <div className="form-group" >
                        <label  for="exampleInputEmail1">username</label>
                        <input type="text" className="form-control username-field" placeHolder="username" aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.currentTarget.value)}/>
                    </div>
                </div>
            </div>
                <div className="form-group" >
                    <label  for="exampleInputEmail1">username</label>
                    <input type="text" className="form-control username-field" placeHolder="link 1" aria-describedby="emailHelp" value={linkOne} onChange={(e) => setLinkOne(e.currentTarget.value)}/>
                </div>
                <div className="form-group" >
                    <label  for="exampleInputEmail1">username</label>
                    <input type="text" className="form-control username-field" placeHolder="link 2" aria-describedby="emailHelp" value={linkTwo} onChange={(e) => setLinkTwo(e.currentTarget.value)}/>
                </div>
                <div className="form-group" >
                    <label  for="exampleInputEmail1">username</label>
                    <input type="text" className="form-control username-field" placeHolder="link 3" aria-describedby="emailHelp" value={linkThree} onChange={(e) => setLinkThree(e.currentTarget.value)}/>
                </div>
            </form>
            <Button className="random-button" variant="primary" onClick={submitAccount}>Random</Button>
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