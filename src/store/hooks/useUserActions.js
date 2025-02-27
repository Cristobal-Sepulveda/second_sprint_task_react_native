import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../reducers/userSlice";

const useUserActions = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);

  const login = (data) => dispatch(loginAction(data));
  const logout = () => dispatch(logoutAction());

  return { user, login, logout };
};

export default useUserActions;
