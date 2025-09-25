#!/bin/bash

# Function to fix a single SCORM package
fix_scorm_package() {
    local zip_name="$1"
    local base_name=$(basename "$zip_name" .zip)

    echo "Processing $zip_name..."

    # Clean and extract
    rm -rf "temp_extract/$base_name"
    powershell -command "Expand-Archive -Path '$zip_name' -DestinationPath 'temp_extract\\$base_name' -Force"

    # Check if CSS file already exists
    if [ -f "temp_extract/$base_name/ivey-widget-base.css" ]; then
        # Check if it's in manifest
        if grep -q "ivey-widget-base.css" "temp_extract/$base_name/imsmanifest.xml"; then
            echo "  ✓ Already fixed - skipping"
            return 0
        else
            echo "  + CSS file exists, adding to manifest"
        fi
    else
        echo "  + Adding CSS file"
        cp "../../demos/widgets/ivey-widget-base.css" "temp_extract/$base_name/ivey-widget-base.css"
    fi

    # Add CSS to manifest if not present
    if ! grep -q "ivey-widget-base.css" "temp_extract/$base_name/imsmanifest.xml"; then
        echo "  + Updating manifest"
        # Find the </resource> line and add CSS reference before it
        sed -i 's|</resource>|      <file href="ivey-widget-base.css"/>\n    </resource>|' "temp_extract/$base_name/imsmanifest.xml"
    fi

    # Create new ZIP
    cd "temp_extract/$base_name"
    powershell -command "Compress-Archive -Path * -DestinationPath '..\\..\\${base_name}-FIXED.zip' -Force"
    cd "../.."

    # Replace original
    mv "$zip_name" "${base_name}-BACKUP.zip"
    mv "${base_name}-FIXED.zip" "$zip_name"

    echo "  ✓ Fixed $zip_name"
}

# List of packages to fix (excluding w1-understanding-data-segments-scorm.zip as it's already fixed)
packages=(
    "ai-evolution-timeline-scorm.zip"
    "ai-hierarchy-scorm.zip"
    "task-model-matcher-scorm.zip"
    "w1-ai-importance-timeline-scorm.zip"
    "w1-big-data-4vs-scorm.zip"
    "w1-data-framework-scorm.zip"
    "w1-evaluation-threshold-scorm.zip"
    "w1-ml-models-hierarchy-scorm.zip"
    "w1-ml-models-matcher-scorm.zip"
    "w1-preprocessing-pipeline-scorm.zip"
)

echo "=== Fixing Week 1 SCORM Packages ==="
echo "Excluding w1-understanding-data-segments-scorm.zip and w1-wrap-quiz-scorm.zip (already fixed)"
echo ""

for package in "${packages[@]}"; do
    fix_scorm_package "$package"
    echo ""
done

echo "=== All packages processed ==="