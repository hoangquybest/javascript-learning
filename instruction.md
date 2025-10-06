## Extensions

- Turbo console log
- Visual Studio IntelliCode
- JavaScript (ES6) code snippets
- Babel Javascript
- Auto Rename Tag
- Evondev snippets
- Live Server
- Prettier
- Local History

## Install extensions

- chmod +x install_extensions.sh: add execute permission to user
- ./install_extensions.sh : run execute file

## Configure User Snippets

1. Tô dòng -> nhấn clog -> wrap bằng console log

- Ctrl/Cmd + Shift + P
- Type "Configure User Snippets"
- Select "Javascript.json"

```
{
  "Wrap in console.log": {
    "prefix": "clog",
    "body": [
      "console.log($TM_SELECTED_TEXT);"
    ],
    "description": "Wrap selected text into console.log()"
  }
}
```

## Open Keyboard Shortcut

1. Tạo phím tắt tô dòng ctrl Shift l -> wrap bằng console log

- Cmd/Ctrl + Shift + P
- Open Keyboard Shortcuts (Json)

```
{
  "key": "ctrl+shift+l",
  "command": "editor.action.insertSnippet",
  "when": "editorHasSelection",
  "args": {
    "snippet": "console.log(${TM_SELECTED_TEXT});"
  }
}
```
