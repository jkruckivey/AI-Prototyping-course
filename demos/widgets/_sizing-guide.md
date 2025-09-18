# Widget Sizing Guide for Canvas Integration

## Recommended iframe Heights

### Week 4 Widgets
- **w4-eval-warmup.html**: 800px
- **w4-threshold-explorer.html**: 900px (has plots)
- **w4-cv-tuning-playground.html**: 1000px (multiple plots)
- **w4-learning-curves.html**: 850px
- **w4-threshold-cost-explorer.html**: 950px (has Plotly chart)
- **w4-lift-deciles.html**: 900px (has table + plot)
- **w4-mini-case-threshold-cost.html**: 700px (compact case study)
- **w4-wrap-quiz.html**: 1200px (8 questions + explanations)

### Week 5 Widgets
- **w5-last-mile-warmup.html**: 900px (interactive reflection)
- **w5-deployment-designer.html**: 1100px (complex flow designer)
- **w5-rollout-simulator.html**: 1000px (real-time simulation)
- **w5-monitoring-dashboard.html**: 1200px (dashboard with multiple plots)
- **w5-drift-detector.html**: 1000px (statistical plots)
- **w5-policy-builder.html**: 1100px (tabbed interface)
- **w5-wrap-quiz.html**: 1300px (8 questions + results)

## Canvas Embedding Code Template

```html
<!-- Responsive widget embed -->
<p><iframe style="width: 100%; height: 900px; border: none;"
   src="https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/WIDGET_NAME.html"
   title="Interactive Widget"></iframe></p>
```

## Auto-Sizing Alternatives (if Canvas supports)

```html
<!-- Option 1: CSS-only responsive -->
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
     src="widget-url"></iframe>
</div>

<!-- Option 2: Canvas auto-resize class (if available) -->
<iframe class="instructure_scripted_iframe"
   src="widget-url"
   data-src="widget-url"
   style="width: 100%; border: none;"></iframe>
```

## Notes
- Heights are estimated based on typical content expansion
- Add 100px buffer for responsive behavior
- Quiz widgets need more height due to explanations
- Dashboard widgets with multiple plots need 1200px+