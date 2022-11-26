---
title: Expo
layout: PageLayout
sections:
  - elementId: ''
    title: We’re growing fast
    subtitle: You should join us.
    media:
      type: ImageBlock
      media:
        type: Media
        src: /images/adobestock_434934439.jpeg
        alt: Hero section image
        width: 7000
        height: 2771
    type: HeroSection
  - elementId: ''
    quote: >-
      ## Being part of this team has been incredible. We’ve fill each other’s
      gaps, and we go to lunch together
    name: Carla Rogers
    title: Someone from the team
    type: QuoteSection
  - elementId: ''
    images:
      - type: ImageBlock
        media:
          type: Media
          src: /images/expo.jpg
          alt: People in the meeting room
          width: 860
          height: 510
      - type: ImageBlock
        media:
          type: Media
          src: /images/post-2.jpg
          alt: People in the meeting room
          width: 960
          height: 640
    spacing: 3
    columns: 2
    aspectRatio: '1:1'
    imageSizePx: 400
    type: MediaGallerySection
  - elementId: ''
    title: Open roles
    projectLists:
      - type: ProjectList
        title: Product
        items:
          - type: ProjectListItem
            title: Director of product managment
            location: San Francisco
            text: >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - label: Apply
                altText: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
                elementId: ''
                type: Action
      - type: ProjectList
        title: Engineering
        items:
          - type: ProjectListItem
            title: Head of engineering
            location: San Francisco
            text: >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - label: Apply
                altText: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
                elementId: ''
                type: Action
          - type: ProjectListItem
            title: Senior Backend Engineer
            location: Remote
            text: >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - label: Apply
                type: Action
                altText: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
                elementId: ''
      - type: ProjectList
        title: Sales
        items:
          - type: ProjectListItem
            title: Sales Development Representative
            location: San Francisco
            text: >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - label: Apply
                type: Action
                altText: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
                elementId: ''
    type: ProjectsSection
  - elementId: contact-form
    backgroundSize: inset
    title: Not seeing the right role? Contact us
    content: >-
      We might have more roles soon, and we’ll contact you if we think there
      might be a good match
    form:
      type: FormBlock
      variant: variant-a
      elementId: contact-form
      action: /api/post
      destination: ''
      fields:
        - type: TextFormControl
          name: first-name
          label: Your first name
          hideLabel: true
          placeholder: First name
          isRequired: false
          width: 1/2
        - type: TextFormControl
          name: last-name
          label: Your last name
          hideLabel: true
          placeholder: Last name
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Your email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
        - type: TextFormControl
          name: address
          label: Your address
          hideLabel: true
          placeholder: Address
          isRequired: false
          width: full
      submitLabel: Submit
    type: ContactSection
---
