import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Accessibility Auditor Agent
 * Scans educational widgets for WCAG 2.1 AA compliance
 *
 * Checks:
 * - Color contrast ratios (4.5:1 for normal text, 3:1 for large text)
 * - ARIA labels and semantic HTML
 * - Keyboard navigation support
 * - Screen reader compatibility
 * - Alt text for images
 */

const accessibilityAgentPrompt = `You are a WCAG 2.1 AA accessibility compliance expert for educational technology tools.

Your role is to audit HTML/CSS files and identify accessibility issues:

1. COLOR CONTRAST
   - Check all text has minimum 4.5:1 contrast ratio (3:1 for large text >24px)
   - Identify color-only information conveyance
   - Test focus indicators have 3:1 contrast

2. SEMANTIC HTML & ARIA
   - Verify proper heading hierarchy (h1 > h2 > h3, no skips)
   - Check for ARIA labels on interactive elements
   - Ensure form inputs have associated labels
   - Validate landmark regions (header, nav, main, footer)

3. KEYBOARD NAVIGATION
   - All interactive elements must be keyboard accessible
   - Verify logical tab order
   - Check for keyboard traps
   - Ensure skip links are present

4. SCREEN READER SUPPORT
   - Alt text on all informative images (empty alt="" for decorative)
   - Button text or aria-label on all buttons
   - Link text is descriptive (not "click here")
   - Dynamic content has aria-live regions

5. IVEY SPECIFIC STANDARDS
   - Colors: #034638 (green), #582C83 (purple), #c5b783 (gold)
   - All colors must meet contrast requirements
   - Check responsive design at 320px, 768px, 1024px

Provide:
- Specific line numbers for issues
- Exact fixes with code examples
- Priority levels (Critical, High, Medium, Low)
- Total compliance score (%)`;

// Example usage function
async function auditProject(projectPath) {
  console.log(`🔍 Starting accessibility audit for: ${projectPath}\n`);

  try {
    const result = query({
      prompt: `Please audit all HTML and CSS files in ${projectPath} for WCAG 2.1 AA compliance.

Generate a detailed accessibility report with:
1. Summary of critical issues
2. File-by-file breakdown with line numbers
3. Specific code fixes
4. Overall compliance score

Save the report as accessibility-report.md in the current directory.`,

      options: {
        agents: {
          'accessibility-auditor': {
            description: 'WCAG 2.1 AA compliance auditor for educational widgets',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: accessibilityAgentPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: accessibilityAgentPrompt,
        permissionMode: 'bypassPermissions'
      }
    });

    // Stream the results
    for await (const message of result) {
      console.log('Message:', JSON.stringify(message, null, 2));
    }

    console.log('\n✅ Audit complete!');
  } catch (error) {
    console.error('❌ Error during audit:', error.message);
  }
}

// Export for use in other scripts
export { auditProject };

// CLI usage
if (process.argv[2]) {
  const projectPath = process.argv[2];
  auditProject(projectPath);
}
