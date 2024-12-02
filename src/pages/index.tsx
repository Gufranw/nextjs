import { Button, Grid, Typography } from '@mui/material';
import {userEmailState} from '@/store/selectors/userEmail';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

export default function Home() {
    // const navigate = useNavigate();
    const router = useRouter();
    const userEmail = useRecoilValue(userEmailState);

    return (
        <>
            <Grid container style={{ padding: "5vw" }}>
                <Grid item xs={12} md={6} lg={6}>
                    <div style={{ marginTop: 100 }}>
                        <Typography variant={'h2'}>
                            EduHub Admin
                        </Typography>
                        <Typography variant={'h5'}>
                            A place to learn, earn and grow
                        </Typography>
                    </div>
                    {!userEmail && <div style={{ display: 'flex', marginTop: 20 }}>
                        <div style={{ marginRight: 10 }}>
                            <Button
                                variant='contained'
                                size={"large"}
                                onClick={() => {
                                    router.push('/signup');
                                }}
                            >Sign Up</Button>
                        </div>
                        <div>
                            <Button
                                variant='contained'
                                size={"large"}
                                onClick={() => {
                                    router.push('/signin');
                                }}
                            >Sign In</Button>
                        </div>
                    </div>}
                </Grid>
                <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
                    <img src="/class.jpg" width={"100%"}></img>
                </Grid>
            </Grid>
        </>
    )
}