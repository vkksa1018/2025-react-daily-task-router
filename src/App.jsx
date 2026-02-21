import "./App.css";
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useParams,
  Outlet,
} from "react-router-dom";
import Logout from "./components/Logout";

const Todo = () => (
  <div>
    <p>這是 Todo 頁面</p>
    <Logout />
  </div>
);
const Login = () => <p>這是登入頁面</p>;
const Register = () => <p>這是註冊頁面</p>;

// 定義 Post (父元件) 與 PostId (子元件)

const Post = () => {
  return (
    <div>
      <h2>Post 頁面</h2>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const PostId = () => {
  const { postId } = useParams();
  return <p>Post ID: {postId}</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>Back</p>
          </NavLink>
          <NavLink to="/register">
            <p>Register Page</p>
          </NavLink>
          <NavLink to="/login">
            <p>Login Page</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo Page</p>
          </NavLink>

          <NavLink to="/post/post123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>

        <Routes>
          <Route path="/" element={<p>這是首頁內容</p>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />

          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
