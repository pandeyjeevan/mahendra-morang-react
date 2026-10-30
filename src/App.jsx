import { useContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import TaskManagement from "./components/TaskManagement";
import Effect from "./components/Effect";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
import ProductDetail from "./components/pages/ProductDetail";
import News from "./components/pages/news/News";
import Dashboard from "./components/pages/Dashboard";
import Blogs from "./components/pages/blogs/Blogs";
import AuthForm from "./components/pages/auth/Auth";
import CounterContext from "../contexts/CounterContext";
import Admin from "./components/admin";
import DashhboardLayouts from "./layouts/DashboardLayouts";
import PrivateRoutes from "./components/PrivateRoutes";
import AppLayouts from "./layouts/AppLayouts";
import ChatBot from "./components/ChatBot";

function App() {
  //parms
  // const user = {
  //   name: "Jeevan",
  //   age: 25,
  // };
  // const { name, age } = user;
  // console.log(user);

  // const [fruit, setFruit] = useState("Apple"); //string
  // const [age, setAge] = useState(25); //number
  // const [color, setColor] = useState("pink"); //color
  // const [show, setShow] = useState(false); //boolean

  // const [count, setCount] = useState(0); //count  0 inital value
  const { count, setCount } = useContext(CounterContext);

  // const student1 = {
  //   name: "Jeevan",
  //   age: 20,
  //   Course: "Mern",
  // };

  // const [students, setStudents] = useState([
  //   {
  //     id: 1,
  //     name: "Jeevan",
  //     age: 20,
  //     course: "Mern",
  //   },
  //   {
  //     id: 2,
  //     name: "rajesh",
  //     age: 30,
  //     course: "Science",
  //   },
  // ]);

  // const changeName = () => {
  //   setStudent({
  //     ...student,
  //     name: "hari",
  //     age: 34,
  //   });
  // };

  // const fruits = ["apple", "banana", "mango"];

  // const [fruits, setFruits] = useState(["apple", "banana", "mango"]);

  // console.log(fruits);

  // console.log(student1, "Stusdent1");
  // console.log(student, "student");

  // console.log(fruit, "using state");
  // const age = 26;

  // const changeFruit = () => {
  //   setFruit("Mango");
  //   console.log(fruit);
  // };

  // const changeAge = () => {
  //   setAge(age + 1);

  //   console.log(age);
  // };

  // const addFruit = () => {
  //   setFruits([...fruits, "Orange"]);
  // };

  // const removeFruit = () => {
  //   setFruits(fruits.filter((fruit) => fruit !== "mango"));
  // };

  // const addStudent = () => {
  //   const newStudent = {
  //     name: "hari",
  //     course: "data",
  //     age: 30,
  //   };

  //   setStudents([...students, newStudent]);
  // };

  // const deleteStudent = (id) => {
  //   console.log(id);
  //   setStudents(students.filter((student) => student.id !== id));
  // };

  return (
    <>
      <div className="flex justify-center">
        <button onClick={() => setCount(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      {/* <TaskManagement /> */}

      {/* <Effect /> */}

      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button> */}

      {/* <h1>Student Information</h1>
      <p>Name: {student.name}</p>
      <p>Age:{student.age}</p>
      <p>Course:{student.course}</p> */}

      {/* <button onClick={changeName}>Change Name</button> */}

      {/* <h1>Students</h1>
      {students.map((student) => (
        <div key={student.id}>
          <h3> {student.name}</h3>
          <p> {student.course}</p>
          <p>{student.age}</p>

          <button onClick={() => deleteStudent(student.id)}>Remove</button>
        </div>
      ))} */}

      {/* <h1>Fruits</h1>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))} */}

      {/* <button onClick={addStudent}>Add Student</button> */}

      {/* <h1 className=" text-red-500 text-center">Tailwind Css Running</h1>

      <div className="flex justify-center items-center h-[500px] w-[500px] my-15 m-auto bg-[#0000FF] md">
        <div className=" h-[100px] w-[100px] bg-red-500"></div>
      </div> */}
      {/* <input type={show ? "text" : "password"}></input>

      <button onClick={() => setShow(true)}> Show</button> */}
      {/* <Header />
      <Navbar name="Ram" age={age} fruit={fruit} />
      <h1>Test data</h1>
      <Footer /> */}

      {/* {age} */}

      {/* <button onClick={changeFruit}>Change</button> */}
      {/* <button onClick={() => setAge(age + 1)}>Change Age</button> */}

      {/* {show ? <h1>This is true</h1> : "False"} */}

      {/* <input type="password" placeholder="show passowrd"> */}

      {/* <button>{show ? "Hide" : "Show"}</button> */}

      {/* <button onClick={() => setCount(count - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <Student name="Ram" age={20} course="BCA" />

      <Student name="Sita" age={21} course="BIT" />

      <Student name="Hari" age={22} course="BCA" />

      <div
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: color,
        }}
      ></div>
      <button className="red" onClick={() => setColor("red")}>
        Red
      </button>
      <button className="blue" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button className="green" onClick={() => setColor("green")}>
        Green
      </button> */}

      {/* //react routing */}

      {/* react application
      react routing
      home/about/product.......

      /about
      /product
      /home */}

      {/* react routing DOM */}

      <Routes>
        <Route path="/" element={<AppLayouts />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/auth" element={<AuthForm />}></Route>
          <Route path="/chat" element={<ChatBot />}></Route>
        </Route>

        <Route
          path="admin"
          element={
            <PrivateRoutes>
              <DashhboardLayouts />
            </PrivateRoutes>
          }
        >
          <Route path="dash" element={<Admin />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
