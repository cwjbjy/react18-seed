import { FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRequest } from "ahooks";
import { getToken, getData } from "@/api/token.js";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "@/service/axios/config/constant";

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;
    localStorage.setItem("username", username);

    navigate(from, { replace: true });
  }

  //获取长短token
  useRequest(getToken, {
    onSuccess: (res: Record<string, any>) => {
      //存储长token
      localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
      //存储短token
      localStorage.setItem(ACCESS_TOKEN, res.accessToken);
    },
  });

  //获取需要长短token的接口，通过封装axios，实现无感刷新token
  const { run } = useRequest(getData, {
    manual: true,
  });

  return (
    <div>
      登录
      <button onClick={run}>获取数据</button>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
