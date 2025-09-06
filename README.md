# 📊 Job Replies

## 🎯 Idea

An open-source website that documents how companies respond to candidates in selection processes.
Each report is stored in a Markdown (.md) file within the repository, functioning as an open and versioned database.

Candidates (or contributors) can add reports about companies, and the site will display statistics transparently.

## 🗂️ Page Structure

### 1. Home

*   **Search bar:** search for companies.
*   **Top 10 Ghostings:** ranking of companies that most ignore candidates.
*   **Top 10 Quick Responses:** companies that respond the fastest.
*   **Blacklist:** companies suspected of scams or abusive practices.
*   **Call to contribute:** link to explain how to add a report.

### 2. Company Page

*   Name and logo (if available).
*   General statistics (ghosting percentage, average response time, etc.).
*   Filters by position (frontend, backend, design, etc.).
*   Chronological list of reports (content of the .md files).
*   Warning badge if on the blacklist.

### 3. Contribution Page

*   Explains how to create reports (.md) via PR.
*   Standard report template with fields:
    *   `company`
    *   `date`
    *   `status` (ghosting, automatic response, negative response, etc.)
    *   `response_time`
    *   `position`
    *   `comment`
    *   `author`

## ⚙️ Technologies

*   **GitHub Pages:** free website hosting.
*   **Markdown files:** storage of reports (functioning as a database).
*   **JavaScript + Marked.js:** reading and converting .md files to HTML.
*   **HTML + CSS:** basic structure and style.

### (Optional in the future)

*   **Eleventy / Astro / Jekyll:** generate static pages from the .md files.
*   **Recharts or Chart.js:** statistics graphs.

## 🚀 Differentiators

*   100% open-source and transparent.
*   Anyone can contribute via Pull Request.
*   Versioned data on GitHub.
*   Simple structure (no backend).
*   Ranking + blacklist to give immediate impact on navigation.
s