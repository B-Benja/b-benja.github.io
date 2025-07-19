---
layout: page
title: Podcast Mover & Tagger
description: batch-download, tag, and sort podcast episodes for long-term local use
img: assets/img/project_covers/podcast_scraper.jpg
importance: 3
category: other
related_publications: false
---

A small utility for archiving downloaded podcast episodes. It moves MP3s into structured folders and adds proper ID3 tags like title, artist, album, and track number—based on filename patterns and minimal user input.

Originally built as a side project to locally organize and preserve podcast collections without relying on external platforms.

The code is available on GitHub:  
[github.com/B-Benja/podcast_mover_tagger](https://github.com/B-Benja/podcast_mover_tagger)
---

### Features

- Renames and tags `.mp3` files using [`mutagen`](https://mutagen.readthedocs.io/)
- Automatically moves files into destination folders based on year and show name
- Reads tag data from filenames or from `last_downloaded_title` in a local JSON cache
- Supports album art embedding (optional)
- Sends Discord notifications on errors (optional)

---

### Example usage

```bash
$ python podcast_tagger.py --input ./downloads --output ./Podcasts
```

---

### Sample tagging logic

From `process_and_tag.py`:

```python
audio["title"] = title
audio["artist"] = artist
audio["album"] = artist
audio["tracknumber"] = str(index)
audio["discnumber"] = str(year)
```

---

### Folder output structure

```
Podcasts/
└── Hardcore Histoy/
    ├── Ep 045 - History of Ideas.mp3
    └── Ep 046 - What Is Truth.mp3
```