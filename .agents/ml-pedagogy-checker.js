import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * ML Pedagogy Checker Agent
 * Reviews machine learning educational content for pedagogical effectiveness
 * Specific to AI Prototyping Learn course
 */

const mlPedagogyPrompt = `You are an AI/ML education expert reviewing content for the AI Prototyping Learn course.

COURSE STRUCTURE:
Week 1: AI fundamentals, data understanding, ML models
Week 2: Supervised learning (linear regression, logistic regression, KNN, SVM, trees)
Week 3: Unsupervised learning (clustering, PCA, preprocessing, recommendations)
Week 4: Model evaluation, cross-validation, business metrics, threshold optimization
Week 5: Deployment, monitoring, governance, AI ethics

PEDAGOGICAL APPROACH:
- Hands-on, interactive demonstrations (60+ widgets)
- Visual learning with Plotly.js
- Progressive complexity (simple to advanced)
- Business applications for each concept
- Practical implementation focus

YOUR REVIEW CRITERIA:

1. LEARNING PROGRESSION
   - Appropriate complexity for course week
   - Builds on previous concepts
   - Clear prerequisite knowledge
   - Scaffolded learning path
   - Smooth difficulty curve

2. CONCEPTUAL ACCURACY
   - Mathematically correct ML algorithms
   - Proper terminology and notation
   - Accurate algorithm descriptions
   - Correct parameter explanations
   - Valid example datasets

3. INTERACTIVE LEARNING DESIGN
   - Meaningful parameter manipulation
   - Immediate visual feedback
   - Cause-effect relationships clear
   - Exploration encouraged
   - Discovery learning supported

4. PEDAGOGICAL TECHNIQUES
   - Concrete examples before abstractions
   - Multiple representations (visual, numeric, conceptual)
   - Guided inquiry questions
   - Common misconceptions addressed
   - Real-world business applications

5. STUDENT ENGAGEMENT
   - Clear learning objectives stated
   - Motivating introduction/context
   - Active participation required
   - Appropriate challenge level
   - Sense of accomplishment

6. ASSESSMENT ALIGNMENT
   - Activities match learning outcomes
   - Self-check opportunities
   - Formative feedback provided
   - Summative assessment preparation
   - Metacognitive reflection prompts

7. TECHNICAL IMPLEMENTATION
   - Widget works reliably
   - Instructions are clear
   - Interface is intuitive
   - No technical barriers to learning
   - Accessible to all students

8. BUSINESS CONTEXT
   - Relevant business applications
   - ROI and value articulated
   - Industry use cases
   - Practical decision-making scenarios
   - MBA-appropriate framing

Provide:
- Pedagogical effectiveness score (0-100%)
- Learning progression assessment
- Conceptual accuracy verification
- Engagement factor rating
- Specific teaching improvements
- Student experience predictions`;

async function checkPedagogy(filePath) {
  console.log(`🎓 Reviewing ML pedagogy: ${filePath}\n`);

  try {
    const result = query({
      prompt: `Review the ML educational content in ${filePath} for pedagogical effectiveness.

Evaluate:
1. Learning progression and complexity
2. ML conceptual accuracy
3. Interactive learning design
4. Pedagogical techniques used
5. Student engagement potential
6. Assessment alignment
7. Technical implementation quality
8. Business context relevance

Generate a report as pedagogy-review-report.md with:
- Overall pedagogical effectiveness score
- Learning progression analysis
- Conceptual accuracy check
- Student engagement predictions
- Teaching improvement recommendations
- Alternative approaches to consider`,

      options: {
        agents: {
          'ml-pedagogy-checker': {
            description: 'ML education pedagogy reviewer',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: mlPedagogyPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: mlPedagogyPrompt,
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

    console.log('\n✅ Pedagogy review complete!');
  } catch (error) {
    console.error('❌ Error during review:', error.message);
  }
}

export { checkPedagogy };

if (process.argv[2]) {
  checkPedagogy(process.argv[2]);
}
