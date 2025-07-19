---
layout: page
permalink: /teaching/
title: teaching
description: Overview of my teaching experience, including lectures, seminars, thesis supervision, and language teaching in China and Japan.
nav: true
nav_order: 6
---

## University Teaching

{% assign sorted_teaching = site.teaching | sort: 'year' | reverse %}
{% for item in sorted_teaching %}
### {{ item.title }}  
**{{ item.institution }}**  
*{{ item.role }}, {{ item.year }}*  
{{ item.content | markdownify }}

*Focus: {{ item.focus }}*

{% endfor %}

---

## Thesis Supervision

**Bachelor’s and Master’s Theses**  
Supervised/co-supervised BSc and MSc theses in economics and innovation studies. Selection of topics:  
- Fuel Cell and Battery Electric Vehicles: A Comparative Patent Landscape Analysis  
- Patent Landscaping on Structural Ice Moulds  
- Tiny house movement Netherlands  

---

## Language Teaching
- **China:** Taught academic/conversational German at universities and private schools (beginner to advanced).  
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
