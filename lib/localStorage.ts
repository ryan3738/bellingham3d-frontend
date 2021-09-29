const getIndexFromId = (id: string, array: [{ id: string }]): number => {
  // TODO Create function that finds index from id
  const index = array.findIndex((item) => item.id === id);
  return index;
};

// Update items in local storage
const updateLocalStorage = ({
  key,
  value,
}: {
  key: string;
  value: any;
}): void => {
  localStorage.setItem(key, JSON.stringify(value));
  console.log('Storage upated...');
};

// * Project CRUD functions
const getLocalStorage = (key: string): any => {
  // Check local storage for items
  const localStoredItem = localStorage.getItem(key);

  // If no items exist return nothing
  //   TODO Remove after done testing
  if (!localStoredItem) {
    return console.log('No items match that key in local storage');
  }
  // Return items if they exist
  if (localStoredItem) {
    const parsedItem = JSON.parse(localStoredItem);
    console.log('Item LOADED...', localStoredItem);
    return parsedItem;
  }
};
export { getLocalStorage, updateLocalStorage, getIndexFromId };

// const getProject = (id) =>
//   getLocalStorage().find((project) => project.id === parseInt(id));

// const addProject = (object) => {
//   //   Add projects to storage
//   const projects = getLocalStorage();
//   projects.push(object);
//   console.log('Storage upated...');
//   updateLocalStorage(projects);
//   return getLocalStorage();
// };

// Delete a project from projects array
// const removeLocalStorage = (id) => {
//   const projects = getLocalStorage();
//   const index = getIndexFromId(id, projects);
//   console.log('Delete project in index:', index);
//   projects.splice(index, 1);
//   updateLocalStorage(projects);
//   return getLocalStorage();
// };

// * Task CRUD functions

// const getTasks = (projectId) => getProject(projectId).tasks;

// const getTask = (projectId, taskId) =>
//   getTasks(projectId).find(
//     (ProjectTask) => ProjectTask.id === parseInt(taskId)
//   );

// const addTask = (projectId, object) => {
//   //   Add tasks to storage
//   const projects = getProjects();
//   const projectIndex = projects.findIndex(
//     (project) => project.id === parseInt(projectId)
//   );
//   projects[projectIndex].tasks.push(object);
//   console.log('Updated Projects', projects);
//   updateMyProjects(projects);
//   console.log('Storage upated...');
//   return getTasks(projectId);
// };

// const updateTask = (projectId, updatedTask) => {
//   const projects = getProjects();
//   projects.forEach((project) => {
//     if (project.id === parseInt(projectId)) {
//       project.tasks.forEach((task) => {
//         if (task.id === parseInt(updatedTask.id)) {
//           task.title = updatedTask.title;
//           task.description = updatedTask.description;
//           task.dueDate = updatedTask.dueDate;
//           task.complete = updatedTask.complete;
//           task.priority = updatedTask.priority;
//           task.notes = updatedTask.notes;
//         }
//       });
//     }
//   });
//   updateMyProjects(projects);
//   return getTasks(projectId);
// };

// const removeTask = (projectId, taskId) => {
//   // delete task from project
//   const projects = getProjects();
//   const projectIndex = getIndexFromId(projectId, projects);
//   const project = projects[projectIndex];
//   const { tasks } = project;
//   const taskIndex = getIndexFromId(taskId, tasks);
//   tasks.splice(taskIndex, 1);
//   projects.splice(projectIndex, 1, project);
//   updateMyProjects(projects);
//   console.log('Projects!!!!', getProjects());
//   return getTasks(projectId);
// };
