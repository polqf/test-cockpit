---
layout: page
title: publications
permalink: /publications/
description: "Wingle Publications: Discover the latest on Wingle, the app that connects travelers mid-flight without Wi-Fi. Read expert tips, stories, and travel insights!"
nav: false
---
{% assign sorted_projects = site.publications | sort: "importance" %}

  <!-- Generate cards for each project -->
<div class="publications">
  <ul class="post-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.publications %}
    {% else %}
      {% assign postlist = site.publications %}
    {% endif %}

    {% for post in postlist %}
      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}
      {% assign year = post.date | date: "%Y" %}
      {% assign tags = post.tags | join: "" %}
      {% assign categories = post.categories | join: "" %}

      <li>

        {% if post.thumbnail %}

        <div class="row">
                  <div class="col-sm-9">
        {% endif %}
                <h3>
                {% if post.redirect == blank %}
                  <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                {% elsif post.redirect contains '://' %}
                  <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
                  <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                {% else %}
                  <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                {% endif %}
              </h3>
              <p>{{ post.description }}</p>
              <p class="post-meta">
                {{ read_time }} min read &nbsp; &middot; &nbsp;
                {{ post.date | date: '%B %d, %Y' }}
                {% if post.external_source %}
                &nbsp; &middot; &nbsp; {{ post.external_source }}
                {% endif %}
              </p>
        {% if post.thumbnail %}
        </div>

          <div class="col-sm-3">
            <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
          </div>
        </div>
        {% endif %}
      </li>

    {% endfor %}

  </ul>
</div>