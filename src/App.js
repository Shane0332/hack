import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import ProfilePage from "./pages/Profile/ProfilePage";
import Courses from "./pages/Courses/Courses";
import CourseDetail from "./pages/Courses/CourseDetail";
import Admin from "./pages/Profile/Admin";
import AddCourse from "./components/Course/AddCourse";
import CourseAccess from "./pages/Courses/CourseAccess";
import CreatRoom from "./pages/Home/CreateRoom/CreatRoom";
import AddPlace from "./pages/Home/Places/AddPlace";
import MapPlace from "./pages/Home/Places/MapPlace";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="createRoom" element={<CreatRoom />} />
        <Route path="mapPlace" element={<MapPlace />} />

        <Route path="AddPlace" element={<AddPlace />} />
        <Route path="admin" element={<Admin />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:courseId" element={<CourseDetail />} />
        <Route path="course-access/:courseId" element={<CourseAccess />} />
        <Route path="add-course" element={<AddCourse />} />
      </Route>
    </Routes>
  );
}

export default App;
