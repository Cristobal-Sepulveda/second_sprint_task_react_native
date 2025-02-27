import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../reducers/userSlice";

const useUserActions = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);
  const login = (data) => dispatch(loginAction(data));
  const logout = () => dispatch(logoutAction());

  return { userReducer, login, logout };
};

export default useUserActions;
