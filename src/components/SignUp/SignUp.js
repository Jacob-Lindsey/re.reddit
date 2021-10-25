import { useState } from "react";
import { auth } from "../../lib/firebase";

const SignUp = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        error: '',
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: '',
        })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(result => {
                result.user.updateProfile({
                    displayName: user.username,
                })

                const myURL = { url: 'http://localhost:3000/' }
                
                result.user.sendEmailVerification(myURL)
                    .then(() => {
                        setUser({
                            ...user,
                            verifyEmail: 'Welcome ${user.username}. To continue, please verify your email.',
                        })
                    })
                    .catch(error => {
                        setUser({
                            ...user,
                            error: error.message,
                        })
                    })

                    auth().signOut();
                    
            }).catch(error => {
                console.log(error);
                setUser({
                    ...user,
                    error: error.message,
                }) 
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name="username" onChange={handleChange} /><br />
                <input type="text" placeholder="Email" name="email" onChange={handleChange} /><br />
                <input type="text" placeholder="Password" name="password" onChange={handleChange} /><br />
                <button type="submit">Sign up</button>
            </form>
            { user.error && <h4>{user.error}</h4> }
        </>
    )
};

export default SignUp;