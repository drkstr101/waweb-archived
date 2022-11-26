---
title: Contact
layout: PageLayout
sections:
  - elementId: ''
    backgroundSize: full
    title: Get Support
    content: |
      We live to serve!
    form:
      type: FormBlock
      variant: variant-a
      elementId: contact-form
      action: /api/post
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: subject
          label: Brief subject line
          placeholder: 'EG. Contact sales, general inquiry, legal contact,  etc...'
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          isRequired: 'false'
          width: full
      submitLabel: Send Message
    media:
      type: ImageBlock
      media:
        type: Media
        src: /images/scott-graham-5fnmwej4taa-unsplash.jpg
        alt: Contact form image
        width: 720
        height: 481
    type: ContactSection
  - type: ContactSection
    backgroundSize: inset
    title: Get early access
    content: >
      Sign up your team today to be the first to try out our new product to
      increae your team’s productivity
    form:
      type: FormBlock
      variant: variant-b
      elementId: contact-form
      destination: ''
      action: /api/post
      fields:
        - name: email
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: Sign Up
---
