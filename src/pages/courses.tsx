import { Typography, Card, Button } from "@mui/material";
import { useEffect, useState } from "react";
// import { API_HOSTNAME } from "../config";
import { useRouter } from "next/router";
import axios from "axios";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/api/admin/courses/`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
            setCourses(res.data.courses);
        }
        fetchData();
    }, [loading]);

    return <>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {courses.map(course => {
                return <Course key={course._id} course={course} loading={loading} setLoading={setLoading}/>
            })}
        </div>
    </>
}

interface CourseType {
    _id: string;
    title: string;
    description: string;
    imageLink: string;
    published: Boolean;
}

function Course({ course, setLoading, loading }: { course: CourseType, setLoading: React.Dispatch<React.SetStateAction<boolean>>, loading: boolean }) {
    const router = useRouter();
    return <>
        <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200,
            padding: 20
        }}>
            <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
            <img src={course.imageLink} style={{ width: 300 }} ></img>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                        router.push("/course/" + course._id);
                    }}
                >
                    <b>Edit</b>
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={ async () => {
                        const res = await axios.delete(`http://localhost:3000/api/admin/courses/${course._id}`, {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert("Course deleted successfully!");
                        setLoading(!loading);
                    }}
                >
                    <b>DELETE</b>
                </Button>
            </div>
        </Card>
    </>
}

export default Courses;