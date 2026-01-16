# Competitive Research Directive

**Goal**: Analyze top 5 Snow Removal Software brands to understand their positioning, call-to-actions (CTAs), and "Direct Response" triggers targeting blue-collar business owners.

**Target Brands**:
1.  Connecteam (`https://connecteam.com`)
2.  Jobber (`https://getjobber.com`)
3.  Service Autopilot (`https://www.serviceautopilot.com`)
4.  Yeti (`https://yetisoftware.com`)
5.  LMN (`https://golmn.com`)

**Process**:
1.  **Preparation**:
    - Ensure `FIRECRAWL_API_KEY` is set in `.env`.
    - Ensure `firecrawl-py` is installed.

2.  **Execution**:
    - Run `python execution/scrape_brands.py`.
    - This script will:
        - Scrape the homepages of the target brands.
        - Save the content as markdown in `.tmp/`.

3.  **Analysis**:
    - Review the generated markdown files in `.tmp/`.
    - Look for:
        - **Positioning**: How do they describe themselves? (e.g., "All-in-one", "Simple", "For Growth")
        - **CTAs**: What is the primary button text? (e.g., "Get Started", "Free Trial", "Demo")
        - **Color Palette**: Dominant colors used.
        - **DR Triggers**: Phrasing that creates urgency or addresses pain points directly (e.g., "Get paid faster", "Stop chasing paper").

4.  **Output**:
    - valid markdown report summarizing the findings.
