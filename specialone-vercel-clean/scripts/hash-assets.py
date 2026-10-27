# -*- coding: utf-8 -*-
"""Content-hash assets/so.css, assets/so.js and assets/so-config.js and
rewrite every *.html reference to the new filenames.

Run after editing any of those three files, from anywhere:
    python scripts/hash-assets.py

Why: the site serves /assets/* with a 1-year immutable Cache-Control header.
A plain ?v=N query string is NOT enough to bust that cache for visitors who
already have the old URL cached (immutable means the browser never
revalidates it, no matter the query string). Hashing the filename itself
guarantees the URL changes whenever the content changes.
"""
import glob
import hashlib
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # specialone-vercel-clean/
ASSETS = os.path.join(ROOT, "assets")

# (logical name, current pattern to find existing hashed/unhashed file, new basename template)
TARGETS = [
    ("so.css", re.compile(r"^so(\.[0-9a-f]{8})?\.css$")),
    ("so.js", re.compile(r"^so(\.[0-9a-f]{8})?\.js$")),
    ("so-config.js", re.compile(r"^so-config(\.[0-9a-f]{8})?\.js$")),
]


def sha8(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        h.update(f.read())
    return h.hexdigest()[:8]


def find_current(pattern):
    for name in os.listdir(ASSETS):
        if pattern.match(name):
            return name
    return None


renames = {}  # old basename -> new basename
for logical, pattern in TARGETS:
    current = find_current(pattern)
    if not current:
        raise SystemExit(f"Could not find an existing file for {logical} in {ASSETS}")
    src = os.path.join(ASSETS, current)
    h = sha8(src)
    stem, ext = logical.rsplit(".", 1)
    new_name = f"{stem}.{h}.{ext}"
    if new_name != current:
        new_path = os.path.join(ASSETS, new_name)
        with open(src, "rb") as f:
            data = f.read()
        with open(new_path, "wb") as f:
            f.write(data)
        if current != new_name:
            os.remove(src)
    renames[current] = new_name
    print(f"{logical}: {current} -> {new_name}")

updated = 0
for path in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True):
    with open(path, encoding="utf-8") as f:
        html = f.read()
    orig = html
    for old, new in renames.items():
        old_escaped = re.escape(old)
        html = re.sub(rf"(assets/){old_escaped}(\?v=\d+)?", rf"\1{new}", html)
    if html != orig:
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(html)
        updated += 1

print(f"Updated references in {updated} HTML file(s).")
print("Remember: vercel.json has a specific no-cache rule matching assets/so-config.*.js — ")
print("keep that source pattern in sync if the hashed filename shape ever changes.")
