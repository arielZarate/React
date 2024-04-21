import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTask, editTask } from "../../Redux/slices/taskSlice";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function TaskForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const taskSelector = useSelector((state) => state.tasks);

  const param = useParams();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    //  console.log(param);

    if (param.id) {
      //busco una tarea en el find
      const taskFind = taskSelector.find((t) => t.id === param.id);

      setTask(taskFind);
    }
  }, []);
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);

    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(task);
    if (param.id) {
      dispatch(editTask({ ...task, id: param.id }));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  return (
    <ContainerMain>
      <h3>
        <Link to="/">Ir a List Task</Link>
      </h3>

      <form onSubmit={handleSubmit}>
        <FormContainer>
          <H1>Task Form</H1>
          <input
            type="text"
            name="title"
            id=""
            value={task.title}
            placeholder="title"
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={task.description}
            id=""
            cols="30"
            rows="4"
            placeholder="ingrese una description"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Save</button>
        </FormContainer>
      </form>
    </ContainerMain>
  );
}

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  border: 1px solid #333;
  border-radius: 0.3rem;

  width: 30rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & button {
    width: 15rem;
    font-size: large;
    font-weight: bold;
    background-color: darkgoldenrod;
    color: #fefefe;
    border: 1px solid black;
    border-radius: 10px;
    height: 2rem;
  }

  & button:hover {
    background-color: teal;
    color: white;
    // transform: scale(5);
  }
`;

const H1 = styled.h1`
  border-radius: 20px;
  width: 12rem;
  background-color: #3333;
  text-align: center;
  background-color: darkmagenta;
  color: white;
`;
