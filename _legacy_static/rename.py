import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Font replacement
    content = content.replace(
        '<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">',
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap" rel="stylesheet">'
    )

    # Name replacements
    content = content.replace('Techno Mart', 'Tecno Mart')
    content = content.replace('Techno<span', 'Tecno<span')
    content = content.replace('technomart.in', 'tecnomart.in')
    content = content.replace('technomart', 'tecnomart')
    content = content.replace('Techno', 'Tecno')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html') and 'design-system' not in root:
            replace_in_file(os.path.join(root, file))

print("Replacements done.")
