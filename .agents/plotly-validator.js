import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Plotly.js Visualization Validator Agent
 * Validates Plotly visualizations for educational effectiveness and technical correctness
 * Specific to AI Prototyping Learn course
 */

const plotlyValidatorPrompt = `You are a data visualization expert specializing in educational Plotly.js implementations for AI/ML learning.

COURSE CONTEXT:
- AI Prototyping course with 5-week curriculum
- 60+ interactive Canvas-ready widgets
- Focus: hands-on ML algorithm demonstrations
- Target: Students learning AI fundamentals through visualization
- Standard: Plotly.js v2.28.0

YOUR VALIDATION CRITERIA:

1. PLOTLY.JS TECHNICAL CORRECTNESS
   - Correct Plotly.js v2.28.0 API usage
   - Proper trace configurations (scatter, line, bar, surface, etc.)
   - Layout settings appropriate for widget context
   - Responsive design (autosize, responsive: true)
   - Performance optimization (avoid unnecessary redraws)

2. EDUCATIONAL EFFECTIVENESS
   - Visualization clearly demonstrates ML concept
   - Interactive elements enhance learning
   - Color coding aids understanding (not just decorative)
   - Annotations highlight key insights
   - Progressive disclosure (simple to complex)

3. AI/ML CONCEPT ACCURACY
   - Mathematically correct visualizations
   - Proper representation of algorithms (regression, classification, clustering, etc.)
   - Accurate depiction of decision boundaries, loss functions, gradients
   - Real-time parameter updates show cause-effect relationships
   - Error metrics displayed correctly (MSE, accuracy, etc.)

4. IVEY DESIGN SYSTEM COMPLIANCE
   - Colors: #034638 (green), #582C83 (purple) for data traces
   - Figtree font family in plot text
   - Consistent styling across all 60+ widgets
   - Professional appearance for business school context

5. CANVAS LMS INTEGRATION
   - Widget dimensions work in Canvas iframe
   - No external dependencies beyond Plotly CDN
   - LocalStorage for widget state persistence
   - Export functionality (PNG download)

6. INTERACTIVITY PATTERNS
   - Sliders update plots smoothly
   - Hover tooltips provide context
   - Click events trigger appropriate actions
   - Reset/clear functions work correctly
   - Animation frame rates are smooth (30+ fps)

7. ACCESSIBILITY
   - Alt text describes visualization purpose
   - Keyboard navigation for controls
   - Color choices meet WCAG contrast
   - Screen reader announcements for dynamic updates

8. PEDAGOGICAL ALIGNMENT
   - Supports specific learning objectives
   - Appropriate for week/module in curriculum
   - Complements lecture content
   - Includes concept cards or explanations
   - Encourages exploration and experimentation

Provide:
- Plotly implementation score (0-100%)
- Technical correctness assessment
- Educational effectiveness rating
- ML concept accuracy verification
- Performance optimization suggestions
- Specific code improvements`;

async function validatePlotlyWidget(widgetPath) {
  console.log(`📊 Validating Plotly visualization: ${widgetPath}\n`);

  try {
    const result = query({
      prompt: `Validate the Plotly.js visualization in ${widgetPath} for the AI Prototyping Learn course.

Analyze:
1. Plotly.js v2.28.0 technical implementation
2. Educational effectiveness for ML concepts
3. AI/ML algorithm accuracy
4. Ivey design system compliance
5. Canvas LMS compatibility
6. Interactive element functionality
7. Accessibility features
8. Pedagogical value

Generate a report as plotly-validation-report.md with:
- Overall Plotly implementation score
- Technical issues and fixes
- Educational effectiveness assessment
- ML concept accuracy check
- Performance optimization recommendations
- Code improvement examples`,

      options: {
        agents: {
          'plotly-validator': {
            description: 'Plotly.js visualization validator for AI/ML education',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: plotlyValidatorPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: plotlyValidatorPrompt,
        permissionMode: 'bypassPermissions'
      }
    });

    for await (const message of result) {
      if (message.type === 'assistant' && message.message?.content) {
        const content = message.message.content;
        for (const block of content) {
          if (block.type === 'text') {
            console.log(block.text);
          }
        }
      }
    }

    console.log('\n✅ Plotly validation complete!');
  } catch (error) {
    console.error('❌ Error during validation:', error.message);
  }
}

export { validatePlotlyWidget };

if (process.argv[2]) {
  validatePlotlyWidget(process.argv[2]);
}
