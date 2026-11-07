# S2 Client Portal: Decision & Requirements (EP38)

**Decision: B. Do not build a portal yet. Keep `/client-resources` as the client-facing hub, and record the requirements below for a future build.**

Date: 2026-11-07. Status: planning document only. No backend, authentication, database or CMS has been implemented.

## 1. Why not now

| Option | Assessment |
|---|---|
| A. Build a client portal now | Rejected. S2 hasn't standardised its document intake, its per-client document method is agreed client by client (EP32), and nobody has been assigned to run accounts, permissions, retention or incident response. A portal holding financial documents would add security and PDPA liability before it adds value. |
| **B. Improve client resources and plan the portal** | **Chosen.** `/client-resources` already covers preparation, document sending, the working cycle, changes to report, how to ask questions (LINE, phone, email) and further support. Clients get clear guidance without S2 holding their data on the website. |
| C. Do nothing | Rejected. Existing clients still need a clear place to find guidance, and Contact now routes the "existing client" intent there (EP37). |

## 2. Candidate use cases (for when the processes are ready)

1. A client sees which documents are outstanding this period.
2. A client uploads documents to an agreed, private place instead of using chat.
3. A client downloads finished deliverables (monthly reports, filings, management reports).
4. A client sees the status of the current cycle (received → in progress → under review → delivered).
5. S2 staff see each client's period checklist and missing items.
6. Secure messaging on a deliverable, as an optional alternative to LINE.

Out of scope: a partner portal, online payments, and live dashboards. These are not offered.

## 3. Data model concept (conceptual only)

- **Client organisation**: legal name, tax ID, service package, assigned S2 staff.
- **Client user**: belongs to one organisation; role is owner or contributor.
- **Engagement period**: organisation, period (for example 2026-10) and status.
- **Document request**: period, category (sales, purchases, bank, payroll and so on) and status (requested, received, accepted).
- **Document**: request, storage key, uploader, timestamp and checksum. Files stay in private object storage, never in a public path.
- **Deliverable**: period, type, file and release date.
- **Audit log**: actor, action, object, time and IP.

## 4. Security boundaries

- Separate authenticated application (for example `portal.` subdomain), isolated from the marketing site and its CSP.
- MFA for every user; no shared accounts. Staff access goes through SSO.
- Tenant isolation is enforced on the server for every query (organisation id from the session, never from the client).
- Files: private bucket with short-lived signed URLs, malware scanning, size and type limits, and encryption at rest.
- PDPA: a lawful basis for processing, retention periods per document type, a deletion process, a data processing agreement with the hosting provider, and a breach response plan.
- Least privilege for staff, a full audit log, and regular access reviews.
- No financial data in analytics, logs or URLs.

## 5. Minimum viable portal (when ready)

1. Login with MFA, one organisation per user.
2. A period checklist of requested documents with upload.
3. Download of released deliverables.
4. A staff view of outstanding items per client.
5. Email notifications that contain no document content.

## 6. What S2 must standardise first

1. A standard document checklist per service and period, replacing case-by-case lists.
2. A naming and categorisation convention for client documents.
3. Defined cycle stages and turnaround expectations (internal, not published as an SLA).
4. Retention and deletion rules for each document type.
5. Ownership: who runs user access, support and incidents.
6. A decision on where documents live today (the current agreed methods) and how they would migrate.

Revisit this decision once items 1–5 are operating consistently for current clients.
