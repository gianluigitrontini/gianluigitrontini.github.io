---
name: "Smart4 Mobile Apps Suite"
repoName: "smart-4-suite"
linkToProject: "https://apps.apple.com/it/developer/nbs-s-r-l/id877666938"
description: "A suite of three healthcare apps (Smart4Care, Smart4Med, Smart4Hospital) used by hospitals and private clinics to manage communication between patients, doctors, and care teams. As frontend/mobile developer at NBS, I built and maintained cross-platform features in Ionic/Angular/Capacitor, with native iOS work in Swift where the hybrid layer wasn't enough — improving day-to-day usability for clinical staff while helping the suite scale across a growing number of healthcare facilities."
logo: ""
image: "/images/projects/smart4-banner.png"
status: "Active"
hidden: false
tier: "featured"
tech_stack:
  [
    "html",
    "css",
    "javascript",
    "tailwind",
    "ionic",
    "angular",
    "swift",
    "java",
    "capacitor",
    "git",
  ]
type: "Mobile Application"
date: "2024-01-01"
year_label: "2023/2024"
---

# Smart4 Mobile App Suites

**Smart4** is a suite of three specialized mobile applications for healthcare professionals, each addressing a different part of the healthcare workflow: territorial and home care, hospital activities, and integrated home-care management.

The suite consists of **three independent mobile codebases — Smart4Med, Smart4Hospital, and Smart4Care** — developed around the same technological approach while serving distinct professional roles and clinical workflows.

All three applications are actively maintained for production use and use **CodePush-based over-the-air updates** to deliver compatible JavaScript changes without requiring a new store release.

## My Role

I worked across the three Smart4 applications, contributing to their ongoing development, maintenance, UX improvements, bug fixing, and release process.

Unlike the Formazione ECM project, where multiple regional applications share a common codebase, the Smart4 suite is composed of **three separate codebases**. Each application can therefore evolve independently according to the needs of its specific healthcare workflow.

My work included:

- Frontend development and maintenance.
- Bug investigation and resolution.
- UX and UI improvements.
- Development of healthcare-specific workflows.
- Maintaining the three independent applications.
- Cross-platform iOS and Android development.
- OTA update management through CodePush.
- Maintaining the custom Capacitor-compatible CodePush integration.
- Production releases and ongoing application maintenance.

## The Three Applications

The Smart4 suite is divided into three focused applications.

```text
                         Smart4
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       Smart4Med      Smart4Hospital    Smart4Care
          │                │                │
     Home / Primary      Hospital       Integrated
        Care              Care           Home Care
```

Each application has its own codebase and user flows, allowing the product to address the specific operational requirements of different healthcare professionals.

---

# Smart4Med

🌐 [Google Play — Smart4Med](https://play.google.com/store/apps/details?id=it.nbsgroup.smart4med&hl=it)

**Smart4Med** is designed for healthcare professionals working in primary and home care, supporting the management of home visits and communication around a patient's health status.

The application allows **MMG, PLS, and MCA professionals** to remotely manage home-care visits and exchange notifications about the health status of their patients with the surveillance and care network.

When authorized by the patient, professionals can also receive notifications related to:

- Hospital admissions.
- Emergency department access.
- Availability of clinical reports.

## Smart4Hospital

🌐 [Google Play — Smart4Hospital](https://play.google.com/store/apps/details?id=it.nbsgroup.smart4hospital&hl=it)

**Smart4Hospital** focuses on digitizing hospital workflows and supporting healthcare professionals in recording and managing clinical activities directly from a mobile device.

The application provides tools for recording care activities such as:

- Clinical diary entries.
- Vital signs.
- Therapy administration.
- Images and clinical documentation.
- Handover and care-delivery notes.
- Consultation reports.
- Notifications.

## Smart4Care

🌐 [Google Play — Smart4Care](https://play.google.com/store/apps/details?id=it.nbsgroup.smart4care&hl=it)

**Smart4Care** supports healthcare professionals involved in integrated home-care pathways, providing a unified mobile workspace for managing care plans, home activities, documentation, and communication.

The application includes functionality for:

- **PAI (Individualized Care Plan)** management.
- Work-plan management.
- Care-path planning.
- Clinical diary.
- Home-care records.
- Tutorials.
- Photo management.
- Communication with physicians.
- Notifications from the Operations Centre and Health District.
- Teleconsultation.
- Recording delivered care activities.

## Three Codebases, One Mobile Suite

Unlike a multi-client application sharing a single codebase, the Smart4 suite is intentionally divided into **three independent applications**.

This separation reflects the substantially different workflows of primary/home care, hospital care, and integrated home care.

```text
                   Smart4 Suite
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   Smart4Med      Smart4Hospital   Smart4Care
   Codebase #1     Codebase #2     Codebase #3
        │               │               │
        ↓               ↓               ↓
     iOS + Android   iOS + Android   iOS + Android
        │               │               │
        └───────────────┼───────────────┘
                        ↓
                  CodePush / OTA
```

Each codebase can evolve independently while following a common approach to cross-platform development, deployment, and maintenance.

## Custom OTA Updates with CodePush

All three applications use **CodePush**, originally part of Microsoft's **App Center** ecosystem, to deliver over-the-air updates for the JavaScript portion of the applications.

The existing CodePush implementation was not compatible with **Capacitor**, so I **forked the implementation and adapted it to work with Capacitor**.

I subsequently maintained this custom integration as part of the applications' ongoing development and release process.

This makes it possible to distinguish between two types of updates:

- **JavaScript changes** → delivered through the customized CodePush integration as OTA updates.
- **Native changes** → distributed through the normal App Store / Google Play release process.

```text
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

For production healthcare applications, this provides a faster path for compatible bug fixes and frontend improvements while keeping native releases reserved for changes that require a new application binary.

## Production & Maintenance

The Smart4 applications are production tools used within real healthcare workflows, making stability and predictability important parts of the development process.

Maintaining three separate codebases also means balancing shared technical practices with application-specific requirements.

The development cycle typically involves:

```text
Bug / requirement / feedback
            ↓
       Investigation
            ↓
      Implementation
            ↓
     Testing & review
            ↓
   ┌────────┴─────────┐
   │                  │
 JavaScript          Native
   │                  │
   ↓                  ↓
 CodePush          Store release
   │                  │
   └────────┬─────────┘
            ↓
      Production users
```

## What I Worked On

My work across the Smart4 suite covered:

- Frontend development.
- Maintenance of three independent mobile codebases.
- Healthcare-specific user workflows.
- UX/UI improvements.
- Bug fixing and troubleshooting.
- Cross-platform development.
- iOS and Android releases.
- CodePush integration and OTA updates.
- Forking and adapting CodePush for Capacitor.
- Maintaining the custom OTA update implementation.
- Production support and iterative improvements.

## Project Focus

The Smart4 suite demonstrates how **different healthcare workflows can be addressed through specialized mobile applications while maintaining a common technical approach to deployment and maintenance**.

The three applications operate independently because their domains are substantially different, but the development process benefits from shared experience around cross-platform mobile development, production maintenance, and OTA delivery.

The result is a family of applications covering different points in the healthcare ecosystem — from primary and home care, to hospital activities, to integrated care management — while giving healthcare professionals dedicated tools tailored to their daily workflows.
 both to the technical development and to the user interface improvements, with a strong focus on scalability, usability, and system integration.
