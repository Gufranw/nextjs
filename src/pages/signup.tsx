import { Typography, Card, TextField, Button } from '@mui/material';
import { userState } from '@/store/atoms/user';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
// import { API_HOSTNAME } from '../config';
import axios from 'axios';
import { useRouter } from 'next/router';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const setUserEmail = useSetRecoilState(userState);

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 150,
                marginBottom: 10
            }}>
                <Typography variant={"h5"}>
                    Welcome to EduHub. Sign up below!
                </Typography>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Card variant="outlined" style={{
                    width: 400,
                    padding: 20
                }}>
                    <TextField
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                    />
                    <br />
                    <br />
                    <TextField
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                    />
                    <br />
                    <br />
                    <Button variant="contained" onClick={async () => {

                        try {
                            // const res = await axios.post(`${API_HOSTNAME}/admin/signup`, {
                            //     username: email,
                            //     password: password
                            // }, {
                            //     headers: {
                            //         'Content-Type': 'application/json'
                            //     }
                            // })
                            // // const data = await res.json();
                            // const token = res.data.token;
                            // localStorage.setItem('token', token);
                            alert("sign up successfully!");
                            setUserEmail({
                                userEmail: email,
                                isLoading: false
                            });
                            router.push('/');
                        } catch (error) {
                            alert("Admin already exists");
                            // console.log('Error:', error.message);
                        }
                    }}
                    >Sign Up</Button>
                </Card>
            </div>
        </>
    )
}

export default Signup;