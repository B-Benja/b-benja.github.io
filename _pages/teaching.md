---
layout: page
permalink: /teaching/
title: teaching
description: Overview of my teaching experience, including lectures, seminars, thesis supervision, and language teaching in China and Japan.
nav: true
nav_order: 6
---

## University Teaching

<div class="row row-cols-1 row-cols-md-2 g-4">
  {% assign sorted_teaching = site.teaching | sort: 'title' %}
  {% for item in sorted_teaching %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ item.institution }} – {{ item.role }}</h6>
        <p class="card-text">{{ item.excerpt | markdownify }}</p>
        {% if item.focus %}
        <p><strong>Focus:</strong> {{ item.focus }}</p>
        {% endif %}
        <a href="{{ item.url | relative_url }}" class="card-link">More info</a>
      </div>
    </div>
  </div>
  {% endfor %}
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
  <summary>Student Evaluations (click to expand)</summary>
  <div style="margin-top: 10px;">
    <img src="/assets/img/teaching/econ_pol.png" alt="Economic Policy" style="max-width: 100%; height: auto;">
    <img src="/assets/img/teaching/network_soc.png" alt="Network society" style="max-width: 100%; height: auto;">
    <img src="/assets/img/teaching/econ_inno_intro.png" alt="Economics of Innovation" style="max-width: 100%; height: auto;">
  </div>
</details>