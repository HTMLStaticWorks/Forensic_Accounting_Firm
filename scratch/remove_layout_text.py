import os

files = [
    "index.html", "home-2.html", "about.html", "services.html", 
    "industries.html", "case-studies.html", "resources.html", 
    "contact.html", "how-it-works.html"
]

target = '<span class="rtl-toggle-text">RTL</span> Layout'
replacement = '<span class="rtl-toggle-text">RTL</span>'

for filename in files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = content.replace(target, replacement)
        
        if new_content != content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"No changes for {filename}")
    else:
        print(f"File {filename} not found")
