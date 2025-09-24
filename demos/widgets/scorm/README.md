# SCORM Package for Week 5 Quiz

This folder contains a SCORM 1.2 compliant package for the Week 5 Deployment & Governance quiz that can be uploaded directly to Canvas LMS.

## Files Included

- `imsmanifest.xml` - SCORM manifest file (required)
- `index.html` - The quiz with SCORM integration
- `scormfunctions.js` - SCORM API wrapper for LMS communication
- `README.md` - This file

## Features

- ✅ Full SCORM 1.2 compliance
- ✅ Automatic grade reporting to Canvas
- ✅ Pass/fail status (70% threshold)
- ✅ Completion tracking
- ✅ Works offline (standalone mode)
- ✅ Responsive design
- ✅ No external dependencies

## How to Deploy to Canvas

### Step 1: Create the SCORM Package

1. Select all files in this folder:
   - `imsmanifest.xml`
   - `index.html`
   - `scormfunctions.js`

2. Create a ZIP file:
   - Windows: Right-click → "Send to" → "Compressed (zipped) folder"
   - Mac: Right-click → "Compress Items"
   - Name it: `w5-quiz-scorm.zip`

### Step 2: Upload to Canvas

1. In your Canvas course, go to **Assignments**
2. Click **+ Assignment**
3. For "Submission Type", select **External Tool**
4. Click **Find** and select **SCORM**
   - If SCORM isn't available, ask your Canvas admin to enable it
5. Upload your `w5-quiz-scorm.zip` file
6. Configure settings:
   - Points: 100
   - Grading Type: Percentage
   - Display Grade As: Percentage

### Step 3: Test the Package

1. Preview as a student
2. Complete the quiz
3. Check that the grade appears in Canvas gradebook

## Scoring

- **Total Points**: 100
- **Pass Threshold**: 70%
- **Question Values**:
  - Questions 1-4: 10 points each
  - Questions 5-8: 15 points each

## SCORM Communication

The package reports to Canvas:
- **Score**: 0-100 percentage
- **Status**: incomplete → passed/failed
- **Interactions**: Individual question responses
- **Time**: Session duration

## Troubleshooting

### "SCORM not available" in Canvas
- Contact your Canvas administrator to enable SCORM
- Alternative: Use Canvas Assignments with "Upload File" submission

### Grade not appearing
- Check that the assignment is set to "External Tool" → "SCORM"
- Ensure points are assigned to the assignment
- Student must click "Submit" after completing quiz

### Content not loading
- Verify the ZIP file contains all 3 files at root level (not in a folder)
- Check that JavaScript is enabled in the browser
- Try a different browser

## Standalone Testing

You can test the quiz locally:
1. Open `index.html` in a browser
2. It will show "Standalone Mode - Practice Only"
3. Scores won't be recorded but functionality works

## Security Note

This SCORM package runs entirely within Canvas's secure environment. No external servers or resources are accessed. All code is self-contained and validated.

## Support

For issues or questions about SCORM in Canvas, consult:
- Canvas SCORM documentation
- Your institution's Canvas support team
- The LMS administrator

## License

This educational content is provided for use within your Canvas LMS course.