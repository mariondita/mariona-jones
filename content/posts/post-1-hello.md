---
layout: post.njk
title: "Ment, Mans i Emocions: Low Tech & Tinkering a l'Aula"
subtitle: "Tecnologia a l'Abast de Tothom i Trastejar a l'Aula"
date: 2024-03-14
image: "/img/journal-entry-1.png"
tag: "OPEN SOURCE IS LOVE"
---

<article class="article-container">
    <header class="article-header">
        <h1 class="article-title">{{ title }}</h1>
        <h2 class="article-subtitle">{{ subtitle }}</h2>
        <div class="article-meta">
            <time datetime="{{ date | dateIso }}">{{ date | dateFilter }}</time>
            <span class="article-tag">{{ tag }}</span>
        </div>
    </header>

    <div class="article-content">
        <blockquote>"La ciència i la vida quotidiana no poden ni han de separar-se." - Rosalind Franklin</blockquote>
    </footer>
</article>
