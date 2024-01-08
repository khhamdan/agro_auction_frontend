import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkSession } from "../redux/register/register.actions";

export const useCheckSession = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkSession());
  }, []);
};
