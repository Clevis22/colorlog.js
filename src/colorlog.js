// colorlog.js

function formatTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString();
}

function colorlog(text, color, textSize = 'inherit', backgroundColor = 'transparent', showTimestamp = false) {
    if (!text || !color) {
        console.error('colorlog: Missing required parameters.');
        return;
    }

    const timestamp = showTimestamp ? `[${formatTimestamp()}] ` : '';
    console.log(`%c${timestamp}${text}`, `color: ${color}; font-size: ${textSize}; background-color: ${backgroundColor}`);
}

colorlog.info = function (text, color, textSize = 'inherit', backgroundColor = 'transparent', showTimestamp = false) {
    colorlog(text, color, textSize, backgroundColor, showTimestamp);
};

colorlog.success = function (text, color, textSize = 'inherit', backgroundColor = 'transparent', showTimestamp = false) {
    colorlog(text, color, textSize, backgroundColor, showTimestamp);
};

colorlog.warn = function (text, color, textSize = 'inherit', backgroundColor = 'transparent', showTimestamp = false) {
    if (!text || !color) {
        console.error('colorlog.warn: Missing required parameters.');
        return;
    }

    console.warn(`%c[${formatTimestamp()}] ${text}`, `color: ${color}; font-size: ${textSize}; background-color: ${backgroundColor}`);
};

colorlog.error = function (text, color, textSize = 'inherit', backgroundColor = 'transparent', showTimestamp = false) {
    if (!text || !color) {
        console.error('colorlog.error: Missing required parameters.');
        return;
    }

    console.error(`%c[${formatTimestamp()}] ${text}`, `color: ${color}; font-size: ${textSize}; background-color: ${backgroundColor}`);
};

// Make colorlog available globally
window.colorlog = colorlog;
