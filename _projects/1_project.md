---
layout: page
title: PPPs
description: Identifying Patent-Paper-Pairs
img: assets/img/ppp/coverimage.png
importance: 1
category: work
related_publications: true
---

Patent–paper pairs (PPPs) are cases where a scientific publication and a patent disclose the same underlying knowledge. They typically emerge when researchers publish scientific findings while simultaneously protecting the corresponding technical application through the patent system. PPPs therefore provide a direct link between scientific research and applied technological development.

These links are empirically important because they allow tracing how scientific knowledge moves into invention and commercialization. Prior work has used PPPs to study science–technology linkages, commercialization strategies, and the interaction between academic publishing and patenting. Murray and Stern (2007) formalized the concept by examining how patenting affects the diffusion of scientific research. Subsequent studies expanded PPP identification to larger datasets and showed that PPPs are concentrated in research areas with strong interactions between science and industry, especially in the biomedical sciences (Lissoni et al. 2013; Magerman et al. 2015). More recent work demonstrates that patents building on scientific research are often associated with more novel and impactful inventions (Marx and Fuegi 2020).

Identifying PPPs, however, remains difficult. Standard approaches typically rely on bibliographic overlap, textual similarity, or shared inventor–author information. These methods face important limitations. Scientific articles are often not cited in the corresponding patent application, particularly because disclosure before filing threatens novelty. Even when patents and papers originate from the same underlying research project, direct citation links are therefore frequently absent.

Text-based approaches face a different problem. Patents and scientific publications are written for fundamentally different purposes and audiences. Scientific papers focus on scientific contribution, theory, methods, and interpretation, while patents focus on technical implementation, applicability, and legal protection. As a result, the same discovery can be described using very different language. Textual overlap between both documents can therefore remain surprisingly low even when they disclose the same underlying knowledge.

At the same time, high textual similarity does not necessarily imply that both documents disclose the same discovery. Papers and patents stemming from the same broader research area may share terminology, methods, or background descriptions without representing the same underlying result. Text-based matching therefore risks both false negatives and false positives.

We take a different approach. Instead of relying solely on textual overlap, we use shared graphical content as an additional signal for identifying PPPs. In cases where a scientific paper and a patent contain the same figure, this overlap provides evidence that both documents disclose the same underlying knowledge. By focusing on shared content rather than textual similarity alone, the method identifies PPPs that are difficult to recover through existing approaches.

<div class="row justify-content-sm-center">
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/ppp/paper.jpg" title="Figure from scientific paper" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/ppp/patent.png" title="Identical figure in patent" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Example of a patent–paper pair where the same graphical content appears in both the scientific publication and the patent document.
</div>

To scale this process, we developed a machine learning pipeline combining OCR and deep learning-based image matching. Figures are extracted from scientific papers and patent documents, preprocessed, and analyzed using OCR to recover figure text and labels. The images are then compared using a Siamese neural network with a DenseNet backbone trained to detect visual similarity between scientific and patent figures. Potential matches are validated using additional contextual information such as grant overlap and publication timing.

The approach enables large-scale identification of PPPs and creates new possibilities for studying the relationship between scientific research and technological invention.

The methodology was first introduced in {% cite buttner2024 %} and applied in {% cite buttner2025 %}.

We use this method to examine whether patents can partially substitute for restricted journal access by acting as an alternative disclosure channel. The results show that closed-access scientific papers linked to patents receive substantially more patent citations than comparable closed-access papers without a linked patent, consistent with patents mitigating some of the barriers created by paywalls. The findings further show that this substitution effect is particularly pronounced for inventors and smaller firms, suggesting that patent disclosure can partially lower access barriers for resource-constrained actors.



