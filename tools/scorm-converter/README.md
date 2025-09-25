# SCORM Package Converter Tool

A comprehensive tool for converting Canvas LMS HTML content into SCORM 1.2 compliant packages.

## Features

- **Single File Processing**: Convert individual Canvas HTML files
- **Batch Processing**: Process multiple files at once
- **Manual Input**: Paste HTML directly for quick conversions
- **Smart Processing**:
  - Converts Canvas emojis to FontAwesome icons
  - Includes Canvas LMS and AMBA template styles
  - Maintains Bootstrap grid layouts
  - Handles responsive design

## How to Use

1. **Access the Tool**: Open `index.html` in your browser
2. **Choose Processing Mode**:
   - Single File: Upload one HTML file
   - Batch: Upload multiple files for bulk processing
   - Manual: Paste HTML content directly
3. **Process & Download**: Click process, then create SCORM package

## Technical Details

- **SCORM Version**: 1.2
- **Includes**:
  - Complete manifest file
  - SCORM API functions
  - Session time tracking
  - Completion tracking
- **Styles**: Canvas LMS, AMBA template, Bootstrap 4.6.2, FontAwesome 5.15.4

## File Structure

```
scorm-converter/
├── index.html      # Main converter tool
└── README.md       # This file
```

## Output

The tool generates a ZIP file containing:
- `imsmanifest.xml` - SCORM manifest
- `index.html` - Processed content with embedded styles
- `scormfunctions.js` - SCORM API communication

## Deployment

Upload the generated `.zip` file directly to your LMS that supports SCORM 1.2.