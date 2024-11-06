import { useState } from "react";
import useUrl from "./useUrl";
let useChangePassword = () => {
  let [error, setError] = useState("");
  let { url } = useUrl();
  let cookie = localStorage.getItem("__toketasjy42562627");
  function handleChangePassword(e) {
    e.preventDefault();
    let old = e.target[0].value;
    let newpass = e.target[1].value;
    console.log(e);
    fetch(`${url}/auth/changePass`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        haveCookie: cookie ? true : false,
        isAuthenticated: cookie,
        old,
        newpass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setError({
          msg: data.msg,
          color: data.color,
        });
      });
  }
  return { handleChangePassword, error, setError };
};
export default useChangePassword;
