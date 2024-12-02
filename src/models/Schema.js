import mongoose from 'mongoose';

// Defining mongoose Schema
// const userSchema = new mongoose.Schema({
//     username: { type: String },
//     password: String,
//     purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
// });

// const adminSchema = new mongoose.Schema({
//     username: { type: String },
//     password: String,
// });

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

// Defining the mongoose model
// const User = mongoose.model('User', userSchema);
// const Admin = mongoose.model('Admin', adminSchema);
// const Course = mongoose.model('Course', courseSchema);

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

// export default {
//         User,
//         Admin,
//         Course
// }

export default Course;