import { createContext, useState } from "react";

export const AuthContext = createContext<Auth>(null);

export interface Auth {
  auth: boolean;
}

export default function useAuth() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = (code: string) => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_OTP_URL}/${code}`)
      .then((res) => {
        console.log(res);
        res
          .json()
          .then((data) => setAuth(data.user))
          .catch(() => console.info("Login failed."));
      })
      .catch(() => console.error("Login fetch failed. There must be network or CORS issues"))
      .finally(() => setLoading(false));

    return code === "111111";
  };
  return { auth, loading, login };
}
