import { createSlice } from "@reduxjs/toolkit";

/*  const task = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 descripction",
    completed: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 descripction",
    completed: false,
  },
  {
    id: "3",
    title: "task 3",
    description: "task 3 descripction",
    completed: false,
  },
]; */

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 descripction",
    completed: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 descripction",
    completed: false,
  },
  {
    id: "3",
    title: "task 3",
    description: "task 3 descripction",
    completed: false,
  },
];

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log(state, action);
      state.push(action.payload);

      // [...state, action.payload];
    },

    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { addTask, deleteTask, editTask } = TaskSlice.actions;
export default TaskSlice.reducer;
