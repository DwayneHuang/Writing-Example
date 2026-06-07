# Product Requirements Document (PRD) — CompSight

**Project Title:** CompSight Compensation Analytics & Benchmarking Platform  
**Status:** High-Fidelity Interactive Demo  
**Target Viewport:** Desktop Only (Fixed 1280 × 800)  

---

## 1. Executive Summary & Vision

CompSight is an enterprise-grade HR Compensation Analytics platform designed to assist compensation analysts, HR business partners (HRBPs), VPs of Total Rewards, and Chief Human Resources Officers (CHROs) in benchmarking, pricing, and optimizing company salary structures. 

The tool bridges the gap between external market intelligence and internal employee equity, offering real-time benchmarking against ~300 metropolitan markets, relocation impact modeling, budget conformance monitoring, and ML-inspired compensation forecasting.

---

## 2. Target User Personas

| Persona | Role | Primary Goals in CompSight |
|---|---|---|
| **VP of Total Rewards** | Executive | Oversees budget compliance, checks for internal pay equity, plans salary bands for expansion, and presents to the Board. |
| **Compensation Analyst** | Core User | Benchmarks specific roles against target locations, adjusts ranges, imports fresh survey datasets, and prepares compensation rosters. |
| **HR Business Partner (HRBP)** | Specialist | Uses the Relocation Wizard to calculate adjustments for moving employees, models counter-offers, and reviews employee compensation status. |
| **CHRO** | Executive | Monitores company-wide positioning against market, ensures retention of key talent, and reviews high-level pay-for-performance alignment. |

---

## 3. Core Functional Modules

### 3.1. Home Dashboard Module
A centralized command center showing key metrics and widgets:
*   **Market Price a Job:** Interactive autocomplete search enabling quick navigation to benchmarking grids.
*   **Hot Jobs Carousel:** Trending market roles displaying demand indicators (+12% growth, active openings).
*   **Total Compensation Statement (TCS):** Generates premium total rewards statements for key employees, showcasing base, bonus, TDC, and market positioning.
*   **Pay vs. Market Scatter Plot:** Charting 100 employee salaries relative to local market reference points (P50), color-coded by market alignment (within range, overpaid, underpaid).
*   **Cost to Budget Histogram:** Interactive bar chart visualizing salary counts for departments alongside configurable budget lines.
*   **Metro Differentials Map:** Geographical visualization representing cost-of-living index and compensation multipliers across ~150 metros.
*   **Relocation Wizard:** Computes salary adjustments between cities based on geographic differentials and cost-of-living modifications.

### 3.2. Market Data Module
Grid-based benchmarking table displaying 500 job positions:
*   **Multi-criteria Filter Bar:** Filter by title search, department, function, experience required, and education required.
*   **Location Adjuster:** Dynamic location select recalculates all 25th, 50th, 75th, and 90th percentiles for the chosen city based on geo multipliers.
*   **Interactive Tabs:** Switch percentiles display dynamically between Base Salary, Annual Bonus, and Total Direct Cash (TDC).
*   **Sorting:** Sort all rows by alphabetical titles, levels, and compensation metrics.

### 3.3. Our Company Module
Internal employee directory displaying 100 staff records:
*   **Employee Equity Roster:** Displays ID, Name, Job, Department, Manager, Salary, Bonus, Performance Star, Tenure, and Compa-ratio.
*   **Equity Indicators:** Color-coded status badges for At Market (90-110%), Above Market (>110%), and Below Market (<90%) alignment.
*   **Search & Filters:** Real-time lookup by name, department, performance rating, and market positioning.

### 3.4. Analytics Module
ML-inspired compensation target engine:
*   **Job Pricing Form:** Input title, department, function, years of experience, education, management scope, and location.
*   **MLR Predictive Logic:** Calculates target Base, Bonus, and TDC percentiles using weighted variables.
*   **Reliability Panel:** Shows model confidence score (R²), margin of error, matched sample size, and feature importance drivers.

---

## 4. Technical Architecture & Constraints
1.  **Architecture:** Single-Page Application (SPA) utilizing vanilla HTML5, CSS3, and ES6 JavaScript (no build step, no npm dependencies for ease of portability).
2.  **Charting:** Chart.js loaded via CDN.
3.  **Map:** Interactive inline SVG using paths mapped to a 960 × 600 viewBox.
4.  **Mock Data:** 300 locations, 500 jobs, and 100 employees loaded via `data.js` as global constants.

---

## 5. Future Roadmap
*   **Multi-Survey Blending:** Allow analysts to blend multiple salary surveys (e.g., Radford, Mercer) with custom weighting.
*   **Security & Audit Trail:** Implement row-level security so HRBPs can only view their direct business units, and log all compensation modifications for audit.
*   **Budget Modeling Sandboxes:** Enable managers to model merit cycles inside interactive sandboxes before submitting for executive approval.
