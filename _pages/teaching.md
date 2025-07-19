---
layout: page
permalink: /teaching/
title: teaching
description: Overview of my teaching experience, including lectures, seminars, thesis supervision, and language teaching in China and Japan.
display_categories: [university]
nav: true
nav_order: 6
---

## University Teaching

<div class="projects">
  {% assign sorted_teaching = site.teaching | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for t in sorted_teaching %}
      {% include projects.liquid project=t %}
    {% endfor %}
  </div>
</div>

---

## Bachelor’s and Master’s Theses Supervision
Supervised/co-supervised BSc and MSc theses in economics and innovation studies. Topics include:  
- Fuel Cell and Battery Electric Vehicles  
- Patent Landscaping on Structural Ice Moulds  
- Tiny house movement Netherlands

---

## Language Teaching
- **China:** Taught German at universities and private schools (beginner to advanced).  
- **Japan:** Taught German to university students and professionals. Focus on fluency and pragmatics.

---

<details>
  <summary>Student Evaluations – Selection (click to expand)</summary>
  <div style="margin-top: 10px;">
    <p>
      These are selected results from anonymous student evaluations for courses where I lectured or led seminars.
    </p>

    <figure style="margin-bottom: 15px;">
      <img src="/assets/img/teaching/econ_pol.png" alt="Economic Policy" style="max-width: 100%; height: auto;">
      <figcaption style="text-align: center; font-size: 0.9em; margin-top: 5px;">Economic Policy</figcaption>
    </figure>

    <figure style="margin-bottom: 15px;">
      <img src="/assets/img/teaching/network_soc.png" alt="Network Society: Citation Networks" style="max-width: 100%; height: auto;">
      <figcaption style="text-align: center; font-size: 0.9em; margin-top: 5px;">Network Society: Citation Networks</figcaption>
    </figure>

    <figure style="margin-bottom: 15px;">
      <img src="/assets/img/teaching/econ_inno_intro.png" alt="Economics of Innovation: Introduction" style="max-width: 100%; height: auto;">
      <figcaption style="text-align: center; font-size: 0.9em; margin-top: 5px;">Economics of Innovation: Introduction</figcaption>
    </figure>
  </div>
</details>
