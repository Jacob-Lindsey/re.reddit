import { useRef, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { auth } from "../../lib/firebase";

const Login = () => {

    const emailRef= useRef(null);
    const passwordRef = useRef(null);
    const [tab, setTab] = useState('left');
    const [passwordVisible, setPasswordVisible] = useState(false);

    let history = useHistory();

    const signUp = e => {
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    };

    const signIn = e => {      
        auth.signInWithEmailAndPassword(
            emailRef.current.value, passwordRef.current.value
        ).then(user => {
            console.log('user', user)
        }).catch(err => {
            console.log(err)
        })
        history.push('/');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (tab === 'left') {
               signIn(); 
            } else {
                signUp();
            }
        }
    }

    const toggleToRight = () => {
        setTab('right');
    }

    const toggleToLeft = () => {
        setTab('left');
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <Wrapper onKeyPress={handleKeyPress}>

            <Tabs>
                <TabLeft tab={tab} onClick={toggleToLeft}>LOG IN</TabLeft>
                <TabRight tab={tab} onClick={toggleToRight}>SIGN UP</TabRight>
            </Tabs>
            {tab === 'left' ?
                <FormWrapper action="">
                    <Input 
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                    />
                    <br />
                    <PasswordWrapper>
                        <Input 
                            ref={passwordRef}
                            type={passwordVisible ? 'text' : 'password'} placeholder="Password" 
                        /> 
                        <br />
                        <span onClick={togglePasswordVisibility}>{passwordVisible ? 'hide password' : 'show password'}</span>
                    </PasswordWrapper>
                    <button onClick={signIn}>log in</button>
                </FormWrapper>
                :
                <FormWrapper action="">
                    <Input
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                    />
                    <br />
                    <PasswordWrapper>
                        <Input 
                            ref={passwordRef}
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password" 
                        />
                        <br />
                        <span onClick={togglePasswordVisibility}>{passwordVisible ? 'hide password' : 'show password'}</span>
                    </PasswordWrapper>
                    <PasswordWrapper>
                        <Input
                            ref={passwordRef}
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Re-enter Your Password"
                        />
                        <br />
                        <span onClick={togglePasswordVisibility}>{passwordVisible ? 'hide password' : 'show password'}</span>
                    </PasswordWrapper>
                    <button onClick={signUp}>sign up</button>
                </FormWrapper>
            }
                
        </Wrapper>
    )
};

export default Login;

const Wrapper = styled.div`
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    display: flex;
    flex-direction: column;
    height: 30rem;
    margin: 6rem auto 0 auto;
    width: 30%;
`;

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    & > span {
        border-bottom: none;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        color: #ddd;
        cursor: pointer;
        font-size: 1.3rem;
        line-height: 4rem;
        width: 50%;
    }
`;

const TabLeft = styled.span`
    background-color: ${(props) => props.tab === "left" ? 'rgb(31,31,31)' : 'rgb(51,51,51)'};
`;

const TabRight = styled.span`
    background-color: ${(props) => props.tab === "right" ? 'rgb(26,26,26)' : 'rgb(51,51,51)'};
`;

const Title = styled.h2`
    
`;

const FormWrapper = styled.form`
    background-color: rgb(26,26,26);
    padding-top: 4rem;
    & > button {
        background-color: rgb(31,31,31);
        border: 2px solid rgba(140,190,255,0.5);
        border-radius: 6px;
        color: rgb(140,190,255);
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        height: 2.5rem;
        margin: 4rem 0rem 2rem 0rem;
        transition: all 0.15s linear;
        width: 6rem;
        &:hover {
            background-color: rgba(140,190,255,0.15);
        }
    }
`;

const Input = styled.input`
    background-color: rgb(26,26,26);
    border: none;
    border-bottom: 1px solid rgb(111,111,111);
    color: #ddd;
    font-size: 1rem;
    line-height: 3rem;
    margin-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;
    transition: all 0.15s linear;
    width: 60%;
    &:focus {
        border-bottom: 1px solid rgba(101,241,101,0.8);
        outline: none;
    }
`;

const PasswordWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    & > span {
        bottom: 55%;
        color: #ddd;
        cursor: pointer;
        font-size: 0.75rem;
        position: absolute;
        right: 21%;
    }
`;