import React from "react";
import Action from "./Action";

function Layout(props) {
  return (
    <>
      <>
        <div className="bg-red-100 p-4 rounded border border-red-400">
          <h2 className="text-lg font-primary font-semibold mb-2">
            {props.level} Priority
          </h2>
          {props.getTasksByPriority(props.level).map((task, index) => (
            <div key={index} className="bg-white p-2 rounded mb-2">
              <div
                className="text-base cursor-pointer font-secondary"
                onClick={() => props.setSelectedTask(task)}
              >
                <p class=" rounded-lg bg-green-500 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                  {task.date}
                </p>
                <p
                  className="text-base cursor-pointer font-secondary"
                  onClick={() => props.setSelectedTask(task)}
                >
                  {task.text}
                </p>
              </div>

              {props.selectedTask === task && (
                <>
                  <Action
                    priority={props.level}
                    handleEditTask={props.handleEditTask}
                    handleChangePriority={props.handleChangePriority}
                    handleDeleteTask={props.handleDeleteTask}
                    selectedTask={props.selectedTask}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </>
    </>
  );
}

export default Layout;
