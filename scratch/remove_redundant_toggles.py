import os
import re

files = [
    "dashboard.html", "dashboard-settings.html", "dashboard-messages.html", 
    "dashboard-documents.html", "dashboard-cases.html"
]

pattern = re.compile(r'<div class="mobile-nav-toggles" style="margin-bottom: 1rem; border-top: none; padding-top: 0;">.*?</div>', re.DOTALL)

for filename in files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = pattern.sub('', content)
        
        if new_content != content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"No changes for {filename}")
    else:
        print(f"File {filename} not found")
