import { Typography, Card, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { userState } from '@/store/atoms/user';
import { userEmailState } from '@/store/selectors/userEmail';
import { useSetRecoilState } from 'recoil';
// import { API_HOSTNAME } from '../config';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
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
                    Welcome to EduHub. Sign in below!
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
                            // const res = await axios.post(`${API_HOSTNAME}/admin/login`, {}, {
                            //     headers: {
                            //         'Content-Type': 'application/json;charset=UTF-8',
                            //         'username': email,
                            //         'password': password
                            //     }
                            // });
                            // const token = res.data.token;
                            // console.log(token);
                            // localStorage.setItem('token', token);
                            alert("sign in successfully!");
                            setUserEmail({
                                userEmail: email,
                                isLoading: false
                            });
                            router.push('/');
                        } catch (error) {
                            alert("admin not found!!! Please sign up first");
                            // console.log('Error:', error.message);
                        }
                    }}>Sign in</Button>
                </Card>
            </div>
        </>
    )
}

export default Signup;