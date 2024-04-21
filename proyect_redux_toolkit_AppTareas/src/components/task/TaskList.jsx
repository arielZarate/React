import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../../Redux/slices/taskSlice";

function TaskList() {
  const taskState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <ContainerMain>
      <h2> task List </h2>

      <h3>
        <Link to="/create">Ir a Form Task</Link>
      </h3>

      <h2>{`Cantidad de tareas ${taskState.length}`}</h2>

      {taskState.map((task) => {
        return (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
              {`Status de tarea:`}{" "}
              {task.completed === false ? "Incompleta" : "Completa"}
            </p>

            <button type="button" onClick={() => handleDelete(task.id)}>
              Delete task
            </button>
            <Link to={`/edit/${task.id}`}>
              <button type="button"> Edit task</button>
            </Link>
          </div>
        );
      })}
    </ContainerMain>
  );
}

export default TaskList;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1;
  margin-top: 2rem;
`;
