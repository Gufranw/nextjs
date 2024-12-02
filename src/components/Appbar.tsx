import { Button, Typography } from "@mui/material";
import { userState } from "@/store/atoms/user";
import {userEmailState} from '@/store/selectors/userEmail';
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
function Appbar() {

    const router = useRouter();
    // const [userEmail, setUserEmail] = useRecoilState(userState);
    const userEmail = useRecoilValue(userEmailState);
    const setUserEmail = useSetRecoilState(userState);
    if (userEmail) {
        return <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10
            }}>
                <div style={{ cursor: "pointer" }} onClick={() => {
                    router.push('/');
                }}>
                    <Typography variant={"h6"}>EduHub</Typography>
                </div>

                <div style={{
                    display: "flex"
                }}>
                    <div>
                        <Button variant="text" onClick={() => {
                            router.push('/addcourse');
                        }}>Add Course</Button>
                    </div>
                    <div style={{ marginRight: 10 }}>
                        <Button variant="text" onClick={() => {
                            router.push('/courses');
                        }}>Courses</Button>
                    </div>
                    <div>
                        <Button variant="contained" onClick={() => {
                            localStorage.setItem("token", '');
                            setUserEmail({isLoading: false, userEmail: null});
                            router.push('/');
                        }}>Logout</Button>
                    </div>
                </div>
            </div>
        </>
    } else {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10
            }}>
                <div style={{ cursor: "pointer" }} onClick={() => {
                    router.push('/');
                }}>
                    <Typography variant="h6">EduHub</Typography>
                </div>

                <div style={{
                    display: "flex"
                }}>
                    <div style={{
                        marginRight: 10
                    }}>
                        <Button variant="contained" onClick={() => {
                            // window.location = '/signup';
                            router.push('/signup');
                        }}>Sign up</Button>
                    </div>
                    <div>
                        <Button variant="contained" onClick={() => {
                            // window.location = '/signin';
                            router.push('/signin');
                        }}>Sign in</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Appbar;