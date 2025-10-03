import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Interactive Widget Tester Agent
 * Tests educational widget functionality, calculations, and user flows
 */

const widgetTesterPrompt = `You are an interactive widget testing expert for educational tools.

TEST CATEGORIES:

1. FUNCTIONALITY TESTING
   - All buttons and controls work
   - Form validation is correct
   - Error messages are clear
   - Success states display properly

2. CALCULATION ACCURACY
   - ROI calculators produce correct results
   - Timers count accurately
   - Percentage calculations are precise
   - Data aggregations are correct

3. DATA PERSISTENCE
   - localStorage saves and retrieves correctly
   - Export functions generate valid files
   - Data format is consistent
   - Clear/reset functions work

4. USER FLOW TESTING
   - Multi-step processes complete successfully
   - Navigation between sections works
   - Required fields are enforced
   - User can recover from errors

5. EDGE CASES
   - Empty inputs handled gracefully
   - Maximum values don't break UI
   - Special characters don't cause errors
   - Browser compatibility (Chrome, Firefox, Safari, Edge)

6. EDUCATIONAL WIDGET SPECIFICS
   - Learning objectives are clear
   - Instructions are understandable
   - Feedback is constructive
   - Results are pedagogically valuable

For each widget, provide:
- Test case checklist
- Issues found with severity (Critical/High/Medium/Low)
- Exact line numbers for bugs
- Recommended fixes with code
- User experience improvements`;

async function testWidget(widgetPath) {
  console.log(`🧪 Testing widget: ${widgetPath}\n`);

  try {
    const result = query({
      prompt: `Test the interactive widget at ${widgetPath}.

Analyze:
1. All JavaScript functionality
2. Calculation accuracy
3. Data persistence (localStorage)
4. Export functionality
5. Form validation
6. Error handling
7. Edge cases

Generate a test report as widget-test-report.md with:
- Test results summary
- Issues found (with line numbers)
- Suggested fixes
- Additional test cases to implement`,

      options: {
        agents: {
          'widget-tester': {
            description: 'Interactive widget tester for educational tools',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: widgetTesterPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: widgetTesterPrompt,
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

    console.log('\n✅ Widget testing complete!');
  } catch (error) {
    console.error('❌ Error during testing:', error.message);
  }
}

export { testWidget };

if (process.argv[2]) {
  testWidget(process.argv[2]);
}
