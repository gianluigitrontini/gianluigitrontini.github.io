---
name: "Formazione ECM"
repoName: "formazione-ecm"
linkToProject: ""
description: "Continuing-education mobile app for licensed medical professionals, active across five Italian regions (Veneto, Piemonte, Sardegna, Valle d'Aosta, and the province of Trento). I owned ongoing maintenance and redesign work — fixing critical UX friction points, resolving longstanding bugs, and shipping updates across iOS (Xcode) and Android (Android Studio) — while keeping a live, regulated-industry user base stable through the transition and earning consistently positive feedback from healthcare professionals."
image: ""
logo: ""
status: "Active"
hidden: false
tier: "featured"
tech_stack:
  [
    "html",
    "css",
    "tailwind",
    "ionic",
    "javascript",
    "capacitor",
    "xcode",
    "android studio",
    "git",
  ]
type: "Mobile Application"
date: "2024-01-01"
year_label: "2023/2024"
---

# Formazione ECM

**Formazione ECM** is a family of continuing-education mobile applications for licensed healthcare professionals, deployed through multiple regional clients across Italy.

The project consists of **8+ customized apps built around a shared codebase**, allowing the same core product to be adapted to the requirements, branding, and healthcare systems of different regional clients.

The applications are actively used across **Veneto, Piemonte, Sardegna, Valle d'Aosta, and the provinces of Trento and Bolzano**, serving a live and regulated-industry user base.

## My Role

I took ownership of the **ongoing maintenance, refactoring, redesign, and release process** across the different applications.

My work focused on improving an existing production codebase while keeping the applications stable for healthcare professionals who relied on them for their continuing education.

This included:

- Refactoring and maintaining the shared codebase.
- Identifying and resolving longstanding bugs.
- Fixing critical UX friction points.
- Redesigning key parts of the user experience.
- Improving application stability and responsiveness.
- Adapting the shared application for different regional clients.
- Shipping and maintaining releases on both **iOS and Android**.
- Working with **Xcode** and **Android Studio** throughout the release cycle.

## The Challenge

The applications were already in production and used by healthcare professionals, making reliability particularly important.

The goal was therefore not simply to redesign an application from scratch. Changes had to be introduced while maintaining a stable experience for an existing user base and supporting multiple client-specific versions of the same product.

The main challenges were:

- Maintaining multiple applications without duplicating the entire product.
- Introducing UX improvements into an established codebase.
- Resolving bugs accumulated over time.
- Keeping behavior consistent across iOS and Android.
- Accommodating differences between regional clients.
- Releasing changes without disrupting an active user base.

## Shared Codebase, Multiple Regional Apps

One of the defining characteristics of the project is its **single-codebase approach**.

Rather than developing eight or more completely independent applications, the core functionality is shared and then customized for each regional client.

This architecture made it possible to roll out improvements across the product family while preserving the specific requirements and identity of each regional implementation.

It also meant that maintenance work on the shared parts of the application could benefit multiple clients at once.

## User Experience Redesign

A major part of my work was the **redesign of the applications' user experience**.

The target users are healthcare professionals who often access the application alongside their daily work. The interface therefore needed to make essential information and actions easy to find without adding unnecessary complexity.

The redesign focused on:

- Making navigation more intuitive.
- Reducing friction in common user flows.
- Improving the clarity of course and training information.
- Making personalized information easier to access.
- Improving responsiveness across different devices.
- Creating a more consistent experience across the different regional applications.

The redesign was introduced incrementally, allowing the applications to evolve without requiring a disruptive transition for existing users.

## Core Features

The applications provide healthcare professionals with tools to manage their continuing medical education activities, including:

- **Personalized dashboards** for an overview of their training activity.
- **Course tracking** to monitor educational activities and progress.
- **Notifications** for upcoming deadlines and relevant events.
- Access to regional ECM content and services.
- Integration with regional healthcare systems.
- Mobile access to training information and administrative functionality.

## Maintenance & Stability

Because the applications were already live, a significant part of the work involved **production maintenance**.

I worked on identifying and resolving issues that had accumulated in the existing applications, including bugs that affected usability and longstanding problems in different user flows.

The objective was to improve the product without compromising the stability expected from an application used in a regulated healthcare environment.

This involved continuous cycles of:

```text
Issue / Feedback
      ↓
Investigation
      ↓
Refactoring / Fix
      ↓
Testing
      ↓
iOS + Android release
      ↓
User feedback
      ↺
```

## Custom OTA Update System

To streamline updates across the different regional applications, I used CodePush, originally part of Microsoft's App Center ecosystem, to deliver over-the-air updates for the JavaScript portion of the applications without requiring a new App Store or Google Play release.

However, the existing CodePush implementation was not compatible with Capacitor, the native runtime used by the applications. Rather than abandoning OTA updates or forcing every change through the store-release process, I forked the CodePush implementation and adapted it to work with Capacitor.

This involved modifying the underlying integration, maintaining the fork over time, and ensuring that OTA updates continued to work reliably across the different regional applications and both iOS and Android.

The resulting workflow allowed us to distinguish between:

JavaScript changes → deployed through the customized CodePush implementation as OTA updates.
Native changes → distributed through the standard App Store / Google Play release process.

```
                 Application update
                         │
              ┌──────────┴──────────┐
              │                     │
       JavaScript change       Native change
              │                     │
              ↓                     ↓
   Custom CodePush fork       Store release
       for Capacitor          iOS / Android
              │
              ↓
          OTA update
              │
              ↓
       Existing users
```

Maintaining this custom integration was particularly useful for a product family with 8+ regional applications, reducing the need for repeated store releases and allowing compatible fixes and improvements to reach users much faster.

## Client Customization

Although the applications share the same underlying product, each regional implementation can require its own configuration and adaptations.

This allowed the platform to support different regional organizations while maintaining a common technological foundation.

The approach can be summarized as:

**One product architecture → multiple regional implementations → shared maintenance and evolution.**

This significantly reduces duplication while making it possible to respond to individual client requirements.

## Outcome

The work resulted in a more stable, maintainable, and user-friendly family of applications while preserving continuity for an established healthcare user base.

The redesigned experience received **consistently positive feedback from healthcare professionals**, particularly around usability and overall application performance.

The project also demonstrated the value of maintaining a shared mobile architecture when the same product needs to be deployed and customized for multiple organizations.

## What I Worked On

My work covered the application lifecycle across the different regional implementations:

- Shared-codebase maintenance.
- Refactoring and technical debt reduction.
- Bug investigation and resolution.
- UX/UI redesign.
- Performance and stability improvements.
- Cross-platform development and debugging.
- iOS releases through Xcode.
- Android releases through Android Studio.
- Regional client customization.
- Production maintenance and iterative improvements.
- Incorporating user and client feedback into subsequent releases.

## Project Focus

Formazione ECM is an example of **maintaining and evolving a mature mobile product rather than simply building a new application from scratch**.

The combination of a shared codebase, multiple regional clients, platform-specific releases, and a live healthcare audience required balancing technical improvements with reliability and continuity.

The result is a scalable approach to delivering customized regional applications while keeping the underlying product maintainable and allowing improvements to propagate across the wider application family.

