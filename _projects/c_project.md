---
layout: page
title: Podcast Downloader & Tagger
description: automating downloads, tagging, and file management for podcast episodes
img:
importance: 4
category: other
related_publications: false
---

Originally built as a fun exercise to archive my favorite podcasts in a structured way, this tool automates the process of downloading, tagging, and organizing podcast episodes. It supports batch retrieval of past and future episodes and stores progress per show using lightweight JSON-based state tracking. Designed for private archival or structured listening collections, it helps avoid duplicate downloads and ensures consistent metadata.

Each podcast is configured via a per-show `.json` config file that includes the feed URL, destination path, artist/album name, and tagging preferences. The script:

- Downloads all new episodes (or re-downloads on demand)
- Tags `.mp3` files with artist, album, title, date, disc number (year), and track number
- Moves completed files to a destination folder
- Skips episodes already downloaded (based on title match)

The core logic uses `mutagen` for ID3 tagging and standard Python libraries for HTTP requests, parsing, and file management.

The script is designed for transparency and minimal setup. It can be run from cron or manually, and works on large backlogs as well as on a rolling basis.

Source available at:  
[github.com/B-Benja/podcast_mover_tagger](https://github.com/B-Benja/podcast_mover_tagger)
