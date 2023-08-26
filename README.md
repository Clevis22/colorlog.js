# colorlog.js Documentation

**colorlog.js** is a lightweight JavaScript library that provides a simple way to log messages to the console with custom colors and styles. It enhances the standard `console.log`, `console.warn`, and `console.error` functions with the ability to specify text colors, background colors, and optional timestamps.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Logging](#basic-logging)
  - [Using Different Log Levels](#using-different-log-levels)
  - [Adding Timestamps](#adding-timestamps)
- [Function Reference](#function-reference)
- [Examples](#examples)

## Installation

To use **colorlog.js**, include the following script tag in your HTML file:

```html
<script src="path/to/colorlog.js"></script>
```

Replace `"path/to/colorlog.js"` with the actual path to your `colorlog.js` file.

## Usage

### Basic Logging

To log a message with a specific color and optional text size and background color:

```javascript
colorlog('This is a message', 'blue', '16px', '#f0f0f0');
```

### Using Different Log Levels

**colorlog.js** extends the basic logging functionality with different log levels, such as `info`, `success`, `warn`, and `error`. These can be used similarly to the regular `colorlog` function:

```javascript
colorlog.info('This is an informational message', 'blue', '20px');
colorlog.success('This is a success message', 'green', '18px');
colorlog.warn('This is a warning message', 'yellow');
colorlog.error('This is an error message', 'red');
```

### Adding Timestamps

You can include timestamps in your log messages by setting the `showTimestamp` parameter to `true`:

```javascript
colorlog('This is a message with a timestamp', 'black', '16px', '#f0f0f0', true);
```

## Function Reference

### `colorlog(text, color, [textSize], [backgroundColor], [showTimestamp])`

Logs a message to the console with custom text color, text size, background color, and an optional timestamp.

- `text` (string): The text message to be logged.
- `color` (string): The CSS color for the text.
- `textSize` (string, optional): The font size of the text (default: `'inherit'`).
- `backgroundColor` (string, optional): The background color for the message (default: `'transparent'`).
- `showTimestamp` (boolean, optional): Whether to show a timestamp before the message (default: `false`).

### `colorlog.info(text, color, [textSize], [backgroundColor], [showTimestamp])`

Logs an informational message to the console with custom properties. Parameters are the same as `colorlog`.

### `colorlog.success(text, color, [textSize], [backgroundColor], [showTimestamp])`

Logs a success message to the console with custom properties. Parameters are the same as `colorlog`.

### `colorlog.warn(text, color, [textSize], [backgroundColor], [showTimestamp])`

Logs a warning message to the console with custom properties. Parameters are the same as `colorlog`.

### `colorlog.error(text, color, [textSize], [backgroundColor], [showTimestamp])`

Logs an error message to the console with custom properties. Parameters are the same as `colorlog`.

## Examples

For more examples of how to use **colorlog.js**, please refer to the demo folder.

---

Feel free to use this Markdown documentation as a starting point and customize it further to match your library's features and usage instructions.
