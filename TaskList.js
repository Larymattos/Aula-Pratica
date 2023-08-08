/* TaskList.js*/

import React, { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState(['Tarefa 1', 'Tarefa 2', 'Tarefa 3']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="remove-button"
              onClick={() => handleRemoveTask(index)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTask}>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

export default TaskList;
