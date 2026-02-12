import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <button type="button" onClick={handleLogout}>
        登出
      </button>
    </>
  );
};
export default Logout;
