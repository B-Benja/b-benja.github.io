---
layout: page
title: Webscraping
description: Scraping Patent Claims
img: assets/img/ppp/claims_scraping.png
importance: 2
category: work
related_publications: false
---

Patent claims define the legal scope of protection. They determine what the patent owner has exclusive rights to, and what competitors are legally excluded from doing. Understanding claims is therefore essential for analyzing the strategic, legal, and technological dimensions of patenting.

Despite their central role, claims are surprisingly hard to access in structured form. Most patent databases index metadata, abstracts, or classification codes—but not full claim texts. When claims are included, they are often incomplete, poorly parsed, or restricted to specific jurisdictions.

I wrote a custom webscraper to extract the full claims section from full-text records (via Google Patents). The tool queries the official patent document viewer and parses claims directly from the HTML DOM, bypassing the limitations of bulk patent data files. It supports batch processing, claim segmentation, and post-processing for downstream use.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/claims_scraper_example.jpg" title="Extracted claims from US patent" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Example output: the full set of claims scraped from a US patent. Each claim is parsed individually and stored with claim number and text content.
</div>

This allows us to analyze not just *that* something was patented, but *what exactly* was claimed. Claims reveal functional boundaries, technical scope, and strategic framing—especially useful when combined with citation data, text similarity, or scientific linkage information.

The tool is available on GitHub:  
[github.com/B-Benja/claims_scraper](https://github.com/B-Benja/claims_scraper)

It is built for transparency, reproducibility, and integration into broader research pipelines focused on knowledge flows, IP strategy, and technology analysis.
