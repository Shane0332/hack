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
import AddPlace from "./pages/Places/AddPlace";
import Map from "./pages/Places/MapPlace";
import Menu from './pages/CreateMem/Menu';
import Safety from './pages/CreateMem/Safety';
import CreateMem from './pages/CreateMem/CreateMem';
import Circle from "./pages/CreateMem/Circle";
import Pro from "./pages/CreateMem/pro";
import SafeZone from "./pages/Places/SafeZone";
import Lalar from "./pages/Home/CreateRoom/Lalar";








function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="createRoom" element={<CreatRoom />} />
        <Route path="mapPlace" element={<Map />} />
        <Route path="Menu" element={<Menu/>}/>
        <Route path="Safety" element={<Safety/>}/>
        <Route path="AddPlace" element={<AddPlace />} />
        <Route path="admin" element={<Admin />} />
        <Route path="courses" element={<Courses />} />
        <Route path="addmember" element={<CreateMem />} />
        <Route path="course/:courseId" element={<CourseDetail />} />
        <Route path="course-access/:courseId" element={<CourseAccess />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="Circle" element={<Circle />} />
        <Route path="pro" element={<Pro />} />
        <Route path="SafeZone" element={<SafeZone />} />
        <Route path="Lalar" element={<Lalar/>} />

      </Route>
    </Routes>
  );
}

export default App;
