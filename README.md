# JSON Formatter

A simple Node.js command-line utility that reads a JSON file, validates its contents, and prints the data in a clean, human-readable, formatted structure.

## Features

- **Read JSON files:** Reads a JSON file from the specified file path.
- **Format JSON:** Pretty-prints valid JSON with consistent indentation.
- **Error handling:** Handles missing files, invalid JSON syntax, and missing file path arguments.
- **Exit codes:** Sets a non-zero exit code when an error occurs, making the script suitable for command-line workflows.

## Requirements

- [Node.js](https://nodejs.org/) installed on your system.
- A JSON file to format.

## How to Run

Open a terminal in the project directory and run the script using Node.js.

### Syntax

```bash
node json-formatter.js <file-path>
```

### Examples

Run the following commands to test the script:

```bash
# Format a valid JSON file
node json-formatter.js user.json

# Test handling of invalid JSON
node json-formatter.js broken.json

# Test handling of a non-existent file
node json-formatter.js missing.json

# Test behavior when no file path is provided
node json-formatter.js
```

## Example

### Input (`user.json`)

```json
{"name":"Dhruv","role":"Developer","skills":["JavaScript","Node.js"]}
```

### Output

```json
{
  "name": "Dhruv",
  "role": "Developer",
  "skills": [
    "JavaScript",
    "Node.js"
  ]
}
```

d personal use.
