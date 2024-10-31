# Task tracker
Repository with a plugin for my actively using IDE to help people feel more comfortable
Author: Gorbunova Ekaterina Maksimovna М3119
# Plugin Features and Functionalities
### Task Management:
* Add Task: Allows users to add tasks via an input box. The task is then stored in an array and a confirmation message is displayed.
* List Tasks: Displays the list of all added tasks in a webview panel. Each task is shown as a list item in an HTML unordered list.
* Clear Tasks: Clears all tasks from the array and shows a confirmation message indicating that all tasks have been removed.
### Commands:
```extension.addTask```
This command triggers the input box for adding a new task.
```extension.listTasks```
This command opens a webview panel to display the list of tasks.
```extension.clearTasks```
This command clears all tasks from the list.
### Webview Panel:
The webview panel is used to display the list of tasks in a simple HTML format. It includes basic HTML structure with a title and an unordered list of tasks.
### User Interaction:
* Input Box: Prompts the user to enter a task.
* Information Messages: Displays messages to inform the user about the addition or removal of tasks
