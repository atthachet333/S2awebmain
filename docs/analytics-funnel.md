# S2 Website Analytics: Event Layer & Funnel (EP39)

Implemented: 2026-11-07. **Measurement starts on the date Cloudflare Zaraz is enabled.** Until then `track()` does nothing. There is no historical baseline, and no earlier numbers should be claimed.

## Principles
- No personal data. The only property keys allowed are `category`, `categories`, `intent`, `source`, `page` and `count`. Values must match `^[a-z0-9_,-]{1,80}$` (`frontend/src/lib/analytics.ts`), so names, emails, phone numbers, messages, file names and health-check answers can't pass the filter.
- No Google Analytics and no third-party scripts added. Zaraz runs on Cloudflare's edge and sends from the same origin.
- Visit statistics come from Cloudflare Web Analytics, which is cookieless.
- The Privacy page (`data/legal.ts`, TH/EN/ZH) describes exactly this.

## Events
| Event | Fired when | Props |
|---|---|---|
| `pricing_view` | /pricing viewed | – |
| `premium_interest` / `enterprise_interest` / `custom_quote_interest` | Link to `/contact?service=premium|enterprise|custom` clicked | page |
| `advisory_capability_view` | `#advisory-capabilities` on /services enters the viewport | – |
| `health_check_start` | First answer in the Business Health Check | – |
| `health_check_complete` | Results shown | categories (focus dimension ids only) |
| `contact_start` | First focus inside the contact form | – |
| `contact_success` | Form submitted successfully | – |
| `phone_click` / `line_click` / `email_click` | tel: / line.me / mailto: link clicked | page |
| `client_resources_view` | /client-resources viewed | – |

## Funnels
1. **Package enquiry:** pricing_view → premium/enterprise/custom_quote_interest → contact_start → contact_success
2. **Advisory:** advisory_capability_view → contact_start → contact_success
3. **Self-assessment:** health_check_start → health_check_complete → contact_start → contact_success
4. **Direct channels:** phone_click + line_click + email_click (contacts made outside the form; the outcome isn't trackable)
5. **Existing clients:** client_resources_view (whether guidance is used)

## To activate
In the Cloudflare dashboard, open Zaraz and enable it for s2aconsultant.com. Then add a destination tool (for example Zaraz's own analytics or a privacy-respecting provider) mapped to the events above. Do not enable tools that set advertising cookies without updating the Privacy page and adding consent.
