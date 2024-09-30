---
layout: base.njk
title: Welcome to Mariona N. Jones Website
---

<section id="hero">
                <div class="hero-content">
                    <h1>Hello, World!</h1>
                    <p><strong>I'm Mariona N. Jones</strong>, head of partnerships at Smashing Magazine & Confs! I love web design & front-end development since 2003. I've also produced & curated a few education & technology events in the last 20 yrs. This is an autobiographical exercise, repository & journal.</p>
                    <button class="cta-button">Biography</button>
                </div>
                <div class="hero-image">
                    <img src="img/mariona-little.svg" alt="Illustration of Mariona N. Jones" class="mariona-little-svg">
                </div>
            </section>

<section id="life">
                <div class="section-header">
                    <img src="img/life-icon.svg" alt="Life Icon" class="section-icon">
                    <h2>Life</h2>
                </div>
                <div class="life-content">
                    <div class="life-text">
                        <p>I've been <strong>20+ years designing and developing</strong> websites, platforms and producing education events. Super fortunate to celebrate next year my 10th anniversary on board the Smashing Magazine & Conferences were I take care of our dear partners online & offline.</p>
                        <p>I love design, cats & dogs, books, nature, science, the Web, robotics, cephalopods, fungi, tech, open source software & hardware, biology & oxytocin + dopamine.</p>
                    </div>
                    <div class="life-image">
                        <img src="img/mariona.png" alt="Mariona N. Jones">
                        <p class="photo-credit">Photography by Edgar Aguilar.</p>
                    </div>
                </div>
            </section>

<section id="work">
                <div class="section-header">
                    <img src="img/swiss-icon.svg" alt="Work Icon" class="section-icon">
                    <h2>Work</h2>
                </div>
                <div class="work-categories">
                    <div class="category">
                        <h3>Partnerships</h3>
                        <img src="img/section-partnerships.png" alt="Partnerships">
                    </div>
                    <div class="category">
                        <h3>Websites</h3>
                        <img src="img/section-websites.png" alt="Websites">
                    </div>
                    <div class="category">
                        <h3>Events</h3>
                        <img src="img/section-events.png" alt="Events">
                    </div>
                </div>
            </section>

 <section id="school">
                <div class="section-header">
                    <img src="img/school-icon.svg" alt="School Icon" class="section-icon">
                    <h2>School</h2>
                </div>
                <div class="school-content">
                    <div class="school-column">
                        <h3>COLLEGE & UNIVERSITY</h3>
                        <ul>
                            <li>
                                <span class="year">2003-2007</span>
                                <strong>B.F.A. Visual Communication</strong>
                                Design & Art History (Southern Illinois University, Carbondale).
                                <em>Grade: Cum Laude.</em>
                            </li>
                            <li>
                                <span class="year">2007-2010</span>
                                <strong>M.Sc. Professional Media &</strong>
                                Media Management Studies (S.I.U., Carbondale, Illinois).
                            </li>
                            <li>
                                <span class="year">2018-2019</span>
                                <strong>Postgraduate Educational</strong>
                                Evaluation & Research (ISEC Lisboa - Instituto Superior de Educação e Ciências, Portugal).
                            </li>
                        </ul>
                    </div>
                    <div class="school-column">
                        <h3>DIPLOMAS</h3>
                        <ul>
                            <li>
                                <span class="year">2015-2015</span>
                                <strong>Fab Academy Diploma</strong>
                                Digital Fabrication & Electronics
                                <em>Fab Lab Network / CBA-MIT</em>
                            </li>
                            <li>
                                <span class="year">2000-2003</span>
                                <strong>Community College Diploma</strong>
                                John A. Logan College
                                <em>Grade: Honors.</em>
                            </li>
                        </ul>
                    </div>
                    <div class="school-column">
                        <h3>CERTIFICATES</h3>
                        <ul>
                            <li>
                                <span class="year">2024-2024</span>
                                <strong>Course Certificate</strong>
                                Berkley via edX.org
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
<section id="journal">
    <div class="container">
        <div class="section-header">
            <img src="/img/journal-icon.svg" alt="Journal icon" class="section-icon">
            <h2>Journal</h2>
        </div>
        <div class="journal-entries">
            {% for post in collections.posts | reverse | limit(3) %}
            <div class="journal-entry">
                <a href="{{ post.url | url }}">
                    <div class="image-container">
                        <img src="{{ post.data.image }}" alt="{{ post.data.title }}">
                        <span class="tag-overlay">{{ post.data.tag }}</span>
                    </div>
                    <h3>{{ post.data.title }}</h3>
                    <p class="post-date">{{ post.date | dateFilter }}</p>
                </a>
            </div>
            {% endfor %}
        </div>
        <div class="view-all">
            <a href="/journal">View all posts</a>
        </div>
    </div>
</section>

