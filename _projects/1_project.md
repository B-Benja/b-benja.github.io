---
layout: page
title: Patents & papers
description: Identifying Patent-Paper-Pairs
img: assets/img/ppp/coverimage.png
importance: 1
category: work
related_publications: true
---

Patent–paper pairs (PPPs) are cases where a scientific publication and a patent disclose the same underlying research, often by the same team and funded by the same grant. These links matter: they allow us to trace how public science becomes part of applied technologies. But they’re hard to detect.

Standard approaches rely on citations or metadata like shared authorship. But these signals are often suppressed or incomplete. Scientific papers are rarely cited in the patents they helped enable, especially when disclosure would threaten novelty. As a result, many PPPs remain hidden.

We take a different route. Instead of relying on citations, we match figures. Our approach compares visual content and extracted captions across scientific articles and patents to identify when the same discovery appears in both. This uncovers direct links that are otherwise invisible.

<div class="row justify-content-sm-center">
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/ppp/paper.jpg" title="Figure from scientific paper" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/ppp/patent.png" title="Identical figure in patent" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Example of a matched pair: the same figure appears in a scientific publication and a later patent application.
</div>

To scale this matching process, we developed a deep learning pipeline. Figures are parsed using OCR to extract captions and surrounding text. Images are passed through a Siamese neural network (DenseNet backbone) trained to detect visual similarity. Combined text–image scores flag potential PPPs for validation—without relying on citations, author names, or institutional metadata.

By focusing on shared content rather than metadata, this method captures a broader and more direct set of science–technology links. It enables large-scale identification of PPPs across disciplines, and offers a new lens to study how disclosed knowledge travels into use.

The methodology was first introduced in {% cite buttner2024 %} and applied in {% cite buttner2025 %}.