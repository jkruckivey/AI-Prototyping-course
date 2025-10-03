import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Ivey Branding Consistency Agent
 * Ensures all projects follow Ivey design system standards
 */

const brandingPrompt = `You are the Ivey Business School branding consistency expert.

OFFICIAL IVEY DESIGN SYSTEM:

1. COLORS
   Primary: #034638 (Ivey Green)
   Secondary: #582C83 (Ivey Purple)
   Accent: #c5b783 (Gold)
   Text Dark: #1f2937
   Text Light: #f9fafb
   Background: #ffffff, #f3f4f6

2. TYPOGRAPHY
   Primary Font: 'Figtree', sans-serif
   Heading Sizes: h1 (2.5rem), h2 (2rem), h3 (1.5rem)
   Body: 16px / 1.6 line-height

3. SPACING SYSTEM
   Base unit: 0.25rem (4px)
   Standard spacing: 1rem, 1.5rem, 2rem, 3rem

4. RESPONSIVE BREAKPOINTS
   Mobile: 320px - 767px
   Tablet: 768px - 1023px
   Desktop: 1024px+

5. COMPONENTS
   Buttons: Rounded corners (8px), padding (12px 24px)
   Cards: Shadow (0 4px 6px rgba(0,0,0,0.1)), border-radius (12px)
   Inputs: Border (2px), focus state with Ivey green

Your audit should:
- Flag non-Ivey colors
- Check font family usage
- Verify spacing consistency
- Identify missing responsive breakpoints
- Suggest fixes with exact CSS code

Provide a branding compliance score (0-100%).`;

async function checkBranding(filePath) {
  console.log(`🎨 Checking Ivey branding consistency for: ${filePath}\n`);

  try {
    const result = query({
      prompt: `Audit ${filePath} for Ivey branding compliance.

Check:
1. Color usage against official palette
2. Typography (fonts, sizes, weights)
3. Spacing consistency
4. Responsive design implementation
5. Component styling standards

Generate a report as branding-report.md with:
- Compliance score
- Violations by file
- Specific CSS fixes
- Recommendations`,

      options: {
        agents: {
          'branding-checker': {
            description: 'Ivey branding consistency checker',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: brandingPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: brandingPrompt,
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

    console.log('\n✅ Branding check complete!');
  } catch (error) {
    console.error('❌ Error during branding check:', error.message);
  }
}

export { checkBranding };

if (process.argv[2]) {
  checkBranding(process.argv[2]);
}
