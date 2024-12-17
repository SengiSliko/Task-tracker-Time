#Task Tracker

##Overview

The Task Tracker is a web-based application designed to help users manage tasks efficiently. It allows users to add tasks, start/stop timers, reset task durations, delete tasks, and drag-and-drop tasks between "To Do" and "Completed" sections. Tasks are persisted using localStorage to ensure data is retained across sessions.

##Features

Add Task: Users can create new tasks with a project name, description, and timestamp.

Start/Stop Timer: Each task has a timer that can be started, stopped, or reset.

Drag-and-Drop: Tasks can be moved between "To Do" and "Completed" sections using drag-and-drop functionality powered by react-dnd.

Delete Task: Tasks can be deleted from the list or automatically removed from "To Do" upon completion.

Local Storage Persistence: Task data is saved to localStorage to ensure tasks remain available after page reloads.

##Technologies Used

React: For building the user interface.

React DnD: For implementing drag-and-drop functionality.

Tailwind CSS: For responsive and modern styling.

JavaScript: Core language for functionality.

LocalStorage: For persisting task data.

##How to Use

Clone the repository to your local machine:

git clone <repository-url>

Navigate to the project directory:

cd task-tracker

Install dependencies:

npm install

Start the development server:

npm start

Open the app in your browser at http://localhost:3000.

File Structure

├── src
│   ├── Components
│   │   ├── AddTask.js       // Component to add new tasks
│   │   ├── EditTask.js      // Component to edit tasks
│   │   ├── ToDo.js          // Component to display individual tasks
│   ├── App.js               // Main application component
│   ├── index.js             // Entry point of the application
├── public
│   ├── index.html           // HTML template
├── package.json             // Project dependencies

Key Components

App.js

Manages the main application state including taskList and completed tasks.

Handles adding tasks, drag-and-drop interactions, and state updates.

ToDo.js

Represents individual tasks with functionality for starting/stopping timers, resetting durations, and deleting tasks.

Implements react-dnd drag functionality to enable moving tasks between sections.

AddTask.js

Provides a form to add new tasks to the "To Do" list.

Future Enhancements

Add categories or tags for tasks.

Implement user authentication to save tasks to a database.

Improve the user interface with more detailed task analytics.

Allow editing of tasks directly in the "To Do" and "Completed" sections.

Contributing

Contributions are welcome! If you have ideas or bug fixes, please follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Add your message here"

Push the branch:

git push origin feature-name

Submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements

React documentation: https://reactjs.org

React DnD documentation: https://react-dnd.github.io

Tailwind CSS documentation: https://tailwindcss.com

