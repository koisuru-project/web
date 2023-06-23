---
layout: category
title: Fairy Tail Final Series
epsname: Fairy Tail Final Series
coverPhoto: https://www.fairytail-tv.com/assets/img/top/main/main_pc_180916.jpg
---


Download

---
  <ul>
    {% for post in site.categories['Fairy-Tail-Final-Series'] %}
  <li><a class="white pinkhover" href="{{ site.baseurl }}{{ post.url }}">{% if post.eps %}{{ post.eps }} - {{ post.epsname }}{% else %}Batch - {{ page.epsname }}{% endif %}</a></li>
  {% endfor %}
