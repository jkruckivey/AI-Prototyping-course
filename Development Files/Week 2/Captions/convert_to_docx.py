import os
from docx import Document

# Get all .txt files in current directory
txt_files = [f for f in os.listdir('.') if f.endswith('.txt')]

print(f"Found {len(txt_files)} text files to convert...")

for txt_file in txt_files:
    # Read the text file
    with open(txt_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Create a new Document
    doc = Document()

    # Add the content as paragraphs (split by newlines)
    for line in content.split('\n'):
        doc.add_paragraph(line)

    # Create output filename (replace .txt with .docx)
    docx_file = txt_file.replace('.txt', '.docx')

    # Save the document
    doc.save(docx_file)
    print(f"Converted: {txt_file} -> {docx_file}")

print(f"\nConversion complete! {len(txt_files)} files converted to DOCX format.")
