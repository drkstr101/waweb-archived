---
title: Home
layout: PageLayout
sections:
  - elementId: intro
    type: HeroSection
    title: Watheia Labs
    subtitle: A capabilities test of the modern web
    actions:
      - type: Action
        label: Get Support
        url: /contact
        style: primary
      - type: Action
        label: Learn More
        url: '#featured'
        showIcon: true
        icon: arrowRight
        iconPosition: right
    media:
      type: ImageBlock
      media:
        type: Media
        src: /images/hero-enterprise.svg
        alt: Enterprise offerings
        width: 444
        height: 533
  - elementId: about
    backgroundSize: inset
    title: What is this?
    content: >
      Watheia Labs is an open-source showcase of best practices on developing
      modern, real-time serverless web applications.
    badge:
      type: Badge
      label: A case study
      styles:
        self:
          textAlign: left
    actions:
      - type: Action
        label: Get Support
        url: /contact
        style: primary
    type: FeatureHighlightSection
    media:
      type: ImageBlock
      caption: Team meeting
      media:
        type: Media
        src: /images/ferenc-almasi-ayjnmg4oux4-unsplash.jpg
        alt: Where did everyone go?
        width: 1920
        height: 1306
  - title: The modern web
    subtitle: This experiment focuses on a few primary research areas
    items:
      - type: FeaturedItem
        title: Scalable
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: Media
          src: /images/scale_black_48dp.svg
          alt: Icon
          width: 48
          height: 48
      - type: FeaturedItem
        title: Secure
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: Media
          src: /images/lock_black_48dp.svg
          alt: Icon
          width: 48
          height: 48
      - type: FeaturedItem
        title: Realtime
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: Media
          src: /images/auto_mode_black_48dp.svg
          alt: Icon
          width: 48
          height: 48
    columns: 3
    enableHover: false
    type: FeaturedItemsSection
  - elementId: domain_driven_design
    title: Domain-Driven Design (DDD)
    content: >
      Modern software projects tend to be limited by organizational intricacy
      rather than technical complexity. Domain-Driven Design is an approach to
      software engineering that focuses on a domain model that has a rich
      understanding of the processes and rules of the domain.
    actions:
      - type: Action
        label: Get Support
        url: /contact
        style: primary
        elementId: hero-main-button
      - type: Action
        label: Learn More
        showIcon: true
        icon: arrowRight
        iconPosition: right
        url: '#'
    media:
      type: ImageBlock
      media:
        type: Media
        src: /images/hero-1.png
        alt: Hero section image
        width: 634
        height: 704
    type: FeatureHighlightSection
  - elementId: behavior_driven_development
    title: Behavior-Driven Development (BDD)
    content: >
      BDD is a way for software teams to work that closes the gap between
      business people and technical people by:

      - Encouraging collaboration across roles to build a shared understanding
      of the problem to be solved
      - Working in rapid, small iterations to increase feedback and the flow
      of value
      - Producing system documentation that is automatically checked against
      the system’s behavior

      We do this by focusing collaborative work around concrete, real-world
      examples that illustrate how we want the system to behave. We use those
      examples to guide us from concept through to implementation, in a process
      of continuous collaboration.
    actions:
      - type: Action
        label: Get Support
        url: /contact
        style: primary
        elementId: hero-main-button
      - type: Action
        label: Learn More
        url: '#'
        showIcon: true
        icon: arrowRight
        iconPosition: right
    media:
      type: ImageBlock
      media:
        type: Media
        src: /images/hero-2.png
        alt: Hero section image
        width: 549
        height: 742
    type: FeatureHighlightSection
  - elementId: 'featured_posts'
    variant: variant-b
    title: Recent posts
    actions:
      - type: Action
        label: See all posts
        url: /blog
        showIcon: true
        icon: arrowRight
    posts:
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
    type: FeaturedPostsSection
    showDate: true
    showAuthor: true
    showExcerpt: true
    subtitle: 'Musings on technology, design, business & more'
  - elementId: support
    title: Need Support?
    items:
      - question: Full-cycle software development
        answer: >
          Our specialty is full-cycle software development, where you bring an
          idea for a new product or feature to us, and we work with you, your
          users, and domain experts to make your vision a reality. We prioritize
          making the right thing, over making the thing right.
      - question: Strategic and tactical IT consulting
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: On-demand training & technical support
        answer: >
          Digital on-demand training defines the future of corporate learning.
          Not only is instructor-led training costly, but it also leads to poor
          retention. On-demand training is a learning strategy that enables
          students to learn at a time, place, and level of their choosing.
      - question: 'Branding, UI/UX, & design systems'
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation. At the office, working together is often a
          distruction, on remote, it could be motivation. At the office, working
          together is often a distruction, on remote, it could be motivation.
      - question: DevOps & systems engineering
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation. At the office, working together is often a
          distruction, on remote, it could be motivation. At the office, working
          together is often a distruction, on remote, it could be motivation.
    type: SupportSection
    actions:
      - altText: ''
        url: /contact
        showIcon: true
        icon: arrowRight
        iconPosition: right
        elementId: ''
        type: Action
        label: Hire Us
    content: >
      As product builders, we know what it means to get great support at the
      right time. We got you covered.

  - elementId: contact
    type: ContactSection
    backgroundSize: inset
    title: Watheia Realtime
    content: >
      Enabling real-time features requires an account to prevent abuse. Luckily,
      we've made this process super smooth. Simply submit your email here and we
      will send you the link for one-click passwordless login.
    form:
      type: FormBlock
      variant: variant-b
      elementId: sign-up-form
      destination: ''
      action: /api/post
      fields:
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: Send Invite
---
