import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Course from '@/models/Schema.js';

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) return;

    return mongoose.connect('mongodb+srv://gufranwaris6098:o8knZztZuTm6VYCr@cluster0.fekxyin.mongodb.net/courses', {
        dbName: "courses"
    });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    switch (req.method) {
        case 'GET':
            const courses = await Course.find();
            res.status(200).json({ courses });
            break;
        case 'POST':
            const newCourse = new Course(req.body);
            await newCourse.save();
            res.status(201).json(newCourse);
            break;
        case 'PUT':
            const { id } = req.query;
            const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(updatedCourse);
            break;
        case 'DELETE':
            const { id: deleteId } = req.query;
            await Course.findByIdAndDelete(deleteId);
            res.status(200).json({ message: 'Course deleted' });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}