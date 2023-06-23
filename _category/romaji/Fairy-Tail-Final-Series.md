---
layout: category
title: Fairy Tail Final Series
epsname: Fairy Tail Final Series
coverPhoto: https://u2.dmhy.org/anidb/images/13295.jpg
---


Download

---
  <ul>
    {% for post in site.categories['Fairy-Tail-Final-Series'] %}
  <li><a class="white pinkhover" href="{{ site.baseurl }}{{ post.url }}">{% if post.eps %}{{ post.eps }} - {{ post.epsname }}{% else %}Batch - {{ page.epsname }}{% endif %}</a></li>
  {% endfor %}