import { useEffect, useReducer, useState } from "react";
import useUrl from "./useUrl";
let useTool = (location) => {
  let { url } = useUrl();
  console.log("use tool");
  let cookie = localStorage.getItem("__toketasjy42562627");
  let alertx = document.getElementById("alertx");
  let Action = {
    TASK_ENTER: "task-enter",
    ERROR_ENTER: "error",
    SET_LOADING: "loading",
    SET_RELOAD: "RELOAD",
  };

  let reducer = (state, action) => {
    if (action.type === Action.TASK_ENTER) {
      return {
        ...state,
        task: action.payload,
      };
    } else if (action.type === Action.ERROR_ENTER) {
      return {
        ...state,
        error: action.payload,
      };
    } else if (action.type === Action.SET_LOADING) {
      return {
        ...state,
        loading: action.payload,
      };
    } else if (action.type === Action.SET_RELOAD) {
      return {
        ...state,
        reload: action.payload,
      };
    }
    return state;
  };
  let [state, dispatch] = useReducer(reducer, {
    task: {},
    error: {},
    loading: true,
    reload: false,
  });

  useEffect(() => {
    console.log("useefect reduce preszdfxg");
    fetch(`${url}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        haveCookie: cookie ? true : false,
        isAuthenticated: cookie,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (location.pathname === "/dasboard/task/completed") {
          let completedTask = data.all.filter((sig) => sig.complete === true);

          dispatch({ type: Action.TASK_ENTER, payload: completedTask });
        } else if (location.pathname === "/dasboard/task/important") {
          console.log("dasboard/task/important");
          let importantTask = data.all.filter((sig) => sig.important === true);
          dispatch({ type: Action.TASK_ENTER, payload: importantTask });
        } else {
          dispatch({ type: Action.TASK_ENTER, payload: data.all });
        }
        dispatch({ type: Action.SET_LOADING, payload: false });
      });
  }, [state.error]);

  function handleComplete(e, idx) {
    let forTask = state.task.find((sig) => sig._id == idx);

    fetch(`${url}/task/complete/${idx}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        haveCookie: cookie ? true : false,
        isAuthenticated: cookie,
        complete: forTask.complete ? false : true,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // dispatch({type:Action.SET_LOADING,payload:true})
        // dispatch({type:Action.TASK_ENTER,payload:data.newTask})
        let errorx = {
          msg: data.msg,
          color: data.color,
        };
        dispatch({ type: Action.ERROR_ENTER, payload: errorx });
        alertx.style.display = "flex";
      });
  }
  function handleDelete(e, idx) {
    fetch(`${url}/task/delete/${idx}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        haveCookie: cookie ? true : false,
        isAuthenticated: cookie,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // dispatch({type:Action.SET_LOADING,payload:true})
        let errorx = {
          msg: data.msg,
          color: data.color,
        };
        dispatch({ type: Action.ERROR_ENTER, payload: errorx });
        dispatch({ type: Action.SET_RELOAD, payload: true });
        alertx.style.display = "flex";
      });
  }
  function handleStar(e, idx) {
    let forTask = state.task.find((sig) => sig._id == idx);
    fetch(`${url}/task/important/${idx}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        haveCookie: cookie ? true : false,
        isAuthenticated: cookie,
        important: forTask.important ? false : true,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // // dispatch({type:Action.SET_LOADING,payload:true})
        // dispatch({type:Action.TASK_ENTER,payload:data.newTask})
        let errorx = {
          msg: data.msg,
          color: data.color,
        };
        dispatch({ type: Action.ERROR_ENTER, payload: errorx });
        dispatch({ type: Action.SET_RELOAD, payload: true });
        alertx.style.display = "flex";
      });
  }

  return { handleComplete, handleDelete, handleStar, state };
};

export default useTool;
