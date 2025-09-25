#!/usr/bin/env python3
"""
Widget Combiner Script
Combines Canvas HTML files with their embedded widget iframes into a single file.
Perfect for creating self-contained SCORM packages.
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

def find_widget_iframes(html_content):
    """Find all widget iframes in the HTML content."""
    pattern = r'<iframe[^>]*src=["\'](https://jkruckivey\.github\.io/AI-Prototyping-course/demos/widgets/[^"\']*)["\'][^>]*>.*?</iframe>'
    matches = re.finditer(pattern, html_content, re.IGNORECASE | re.DOTALL)

    widgets = []
    for match in matches:
        widgets.append({
            'full_match': match.group(0),
            'url': match.group(1),
            'filename': match.group(1).split('/')[-1]
        })

    return widgets

def get_local_widget_path(widget_url, base_path):
    """Convert GitHub Pages URL to local file path."""
    # Extract the path after 'AI-Prototyping-course/'
    url_parts = widget_url.split('AI-Prototyping-course/')
    if len(url_parts) > 1:
        relative_path = url_parts[1]
        local_path = base_path / relative_path
        return local_path
    return None

def read_widget_content(widget_path):
    """Read the widget HTML content from local file."""
    try:
        with open(widget_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract just the body content if it's a full HTML file
        body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.IGNORECASE | re.DOTALL)
        if body_match:
            body_content = body_match.group(1)

            # Also extract any widget-specific styles
            style_match = re.search(r'<style[^>]*>(.*?)</style>', content, re.IGNORECASE | re.DOTALL)
            if style_match:
                styles = f'<style>\\n/* Styles from {widget_path.name} */\\n{style_match.group(1)}</style>\\n'
                return styles + body_content

            return body_content

        return content

    except Exception as e:
        print(f"Error reading widget {widget_path}: {e}")
        return None

def combine_widgets(canvas_html_path, output_path=None):
    """Combine Canvas HTML with embedded widgets."""

    # Determine base path for widgets
    base_path = Path(canvas_html_path).parent.parent.parent  # Go up to project root

    # Read the Canvas HTML file
    with open(canvas_html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Find all widget iframes
    widgets = find_widget_iframes(html_content)

    if not widgets:
        print("No widget iframes found in the HTML file.")
        return html_content

    print(f"Found {len(widgets)} widget(s) to inline:")
    for widget in widgets:
        print(f"  - {widget['filename']}")

    # Process each widget
    combined_html = html_content
    for widget in widgets:
        local_path = get_local_widget_path(widget['url'], base_path)

        if local_path and local_path.exists():
            print(f"Processing {widget['filename']}...")
            widget_content = read_widget_content(local_path)

            if widget_content:
                # Create a wrapper div for the inlined widget
                wrapped_content = f'''
<div class="inlined-widget" data-widget="{widget['filename']}" style="border: 2px solid #034638; border-radius: 8px; padding: 20px; margin: 20px 0; background: #f8fffe;">
    <div class="widget-info" style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #034638; font-size: 0.9em; color: #666;">
        [i] Inlined Widget: {widget['filename']}
    </div>
    {widget_content}
</div>'''

                # Replace the iframe with the inlined content
                combined_html = combined_html.replace(widget['full_match'], wrapped_content)
                print(f"  [SUCCESS] Inlined {widget['filename']}")
            else:
                print(f"  [ERROR] Failed to read content for {widget['filename']}")
        else:
            print(f"  [WARNING] Widget file not found locally: {local_path}")

    # Add a comment at the top indicating this is a combined file
    combined_html = f'''<!--
This is a combined HTML file with inlined widgets.
Original file: {Path(canvas_html_path).name}
Widgets inlined: {', '.join([w['filename'] for w in widgets])}
Generated using widget-combiner tool
-->
{combined_html}'''

    # Save the combined HTML
    if output_path is None:
        output_path = Path(canvas_html_path).parent / f"{Path(canvas_html_path).stem}-combined.html"

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(combined_html)

    print(f"\\n[COMPLETE] Combined HTML saved to: {output_path}")
    return combined_html

def main():
    """Main entry point for the script."""
    if len(sys.argv) < 2:
        print("Usage: python combine-widgets.py <canvas-html-file> [output-file]")
        print("\\nExample:")
        print('  python combine-widgets.py "Development Files/Week 1/canvas-01-ai-importance.html"')
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None

    if not Path(input_file).exists():
        print(f"Error: File not found: {input_file}")
        sys.exit(1)

    combine_widgets(input_file, output_file)

if __name__ == "__main__":
    main()