# Week 1 Uplimit Markdown Storyboards

This directory contains Uplimit-formatted markdown storyboards converted from Canvas LMS HTML pages.

## File Structure

| File | Original Source | Description |
|------|----------------|-------------|
| `01-week-1-intro.md` | `w_1_00_intro.html` | Week 1 orientation and overview |
| `02-ai-importance.md` | `canvas-01-ai-importance.html` | AI concepts, context, and business value |
| `03-understanding-data.md` | `canvas-02-understanding-data.html` | Data journey and supermarket case study |
| `04-data-science-framework.md` | `canvas-02a-data-science-framework.html` | 6-phase DS workflow |
| `05-supermarket-case-study.md` | `canvas-02b-supermarket-case-study.html` | Applied case study prompts |
| `06-big-data-dimensions.md` | `canvas-02c-big-data-dimensions.html` | 4Vs of big data |
| `07-machine-learning-models.md` | `canvas-03-machine-learning-models.html` | ML families and selection guide |
| `08-data-preprocessing.md` | `canvas-04-data-preprocessing.html` | Feature engineering and pipelines |
| `09-evaluation-training.md` | `canvas-05-evaluation-training.html` | Metrics, experiments, and monitoring |
| `10-week-1-wrap-up.md` | `w_1_wrap_up.html` | Review, knowledge check, and reflection |

## Conversion Notes

### What Was Converted

- **Content structure**: All text content, headings, and learning objectives
- **Tables**: Comparison tables and data tables converted to markdown format
- **Lists**: Both bulleted and numbered lists preserved
- **Accordions**: Converted to heading/subheading structure
- **Callouts**: Preserved as emphasized sections with clear labels
- **Widget references**: Documented with source information (SCORM package IDs or GitHub Pages URLs)

### Uplimit-Specific Formatting

- Clean markdown headers (H1, H2, H3 hierarchy)
- Horizontal rules (`---`) for section separation
- Bold/italic emphasis where appropriate
- Widget embeds documented as structured blocks with:
  - Widget name/title
  - Type of interaction
  - Source reference (SCORM package or URL)
  - Purpose/learning objectives
  - Estimated duration

### Widget References

The following interactive widgets are referenced in these storyboards:

1. **AI Evolution Timeline** (SCORM Package 49225)
2. **Customer Segmentation Explorer** (SCORM Package 49232)
3. **Data Science Framework Tool** (SCORM Package 49233)
4. **AI Hierarchy Explorer** (SCORM Package 49223)
5. **Data Preprocessing Explorer** (SCORM Package 49218)
6. **Threshold Explorer** (GitHub Pages widget)

### What Needs Follow-Up

- **Widget URLs**: Update SCORM package references to Uplimit-specific embed codes
- **Video embeds**: Convert Panopto video references to Uplimit video embed format
- **Interactive elements**: May need Uplimit-specific iframe or component syntax
- **Quizzes**: Knowledge check sections may need formal quiz component markup
- **Reflection prompts**: May benefit from Uplimit text response or discussion components

## Next Steps

1. Review each markdown file for Uplimit platform compatibility
2. Update widget embed codes with actual Uplimit iframe syntax
3. Convert knowledge checks to Uplimit quiz components if needed
4. Test all markdown rendering in Uplimit platform
5. Adjust heading hierarchy or formatting as needed for Uplimit display

## Conversion Date

2025-10-17

## Technical Notes

- All original HTML used AMBA template structure with dp-wrapper framework
- Canvas LMS-specific classes and IDs have been removed
- Accessibility features (ARIA labels, skip links) documented but not included in markdown
- JavaScript accordion functionality replaced with static markdown structure
