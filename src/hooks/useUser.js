import { useCallback, useState } from "react";
import loginService from "../services/login";

export default function useUser() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = useCallback(({ email, password }) => {
    setLoading(true);
    setError(false);
    loginService({ email, password })
      .then((res) => {
        /* window.sessionStorage.setItem("token", token); */
        setLoading(false);
        setError(false);
        setToken(res);
      })
      .catch((err) => {
        /* window.sessionStorage.removeItem("token"); */
        setLoading(false);
        setError(true);
      });
  }, []);

  const logout = useCallback(() => {
    /* window.sessionStorage.removeItem("token"); */
    /* setToken(null); */
  }, []);

  return {
    isLogged: Boolean(token),
    isLoginLoading: loading,
    hasLoginError: error,
    login,
    logout,
    token
  };
}
