const vscode = require('vscode');

function activate(context) {
    let tasks = [];

    let addTask = vscode.commands.registerCommand('extension.addTask', function () {
        vscode.window.showInputBox({ prompt: 'Введите задачу' }).then(task => {
            if (task) {
                tasks.push(task);
                vscode.window.showInformationMessage(`Задача добавлена: ${task}`);
            }
        });
    });

    let listTasks = vscode.commands.registerCommand('extension.listTasks', function () {
        const panel = vscode.window.createWebviewPanel(
            'tasks',
            'Список задач',
            vscode.ViewColumn.One,
            {}
        );

        panel.webview.html = getWebviewContent(tasks);
    });

    let clearTasks = vscode.commands.registerCommand('extension.clearTasks', function () {
        tasks = [];
        vscode.window.showInformationMessage('Все задачи удалены');
    });

    context.subscriptions.push(addTask);
    context.subscriptions.push(listTasks);
    context.subscriptions.push(clearTasks);
}

function getWebviewContent(tasks) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Список задач</title>
        </head>
        <body>
            <h1>Список задач</h1>
            <ul>
                ${tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
        </body>
        </html>
    `;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
