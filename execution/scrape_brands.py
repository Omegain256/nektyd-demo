import os
import time
from firecrawl import FirecrawlApp

# Load .env manually to avoid extra dependencies
def load_env():
    env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if line.strip() and not line.startswith('#'):
                    key, value = line.strip().split('=', 1)
                    os.environ[key] = value

def main():
    load_env()
    api_key = os.environ.get("FIRECRAWL_API_KEY")
    
    if not api_key or api_key == "your_api_key_here":
        print("Error: FIRECRAWL_API_KEY not set in .env")
        return

    app = FirecrawlApp(api_key=api_key)
    
    brands = {
        "connecteam": "https://connecteam.com",
        "jobber": "https://getjobber.com",
        "service_autopilot": "https://www.serviceautopilot.com",
        "yeti": "https://yetisoftware.com",
        "lmn": "https://golmn.com"
    }

    output_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.tmp')
    os.makedirs(output_dir, exist_ok=True)

    for name, url in brands.items():
        print(f"Scraping {name} ({url})...")
        try:
            # Scrape the URL
            scrape_result = app.scrape(url, formats=['markdown'])
            markdown_content = scrape_result.markdown
            
            # Save to file
            filename = os.path.join(output_dir, f"{name}.md")
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(markdown_content)
            print(f"Saved to {filename}")
            
            # Rate limit politeness
            time.sleep(2)
            
        except Exception as e:
            print(f"Failed to scrape {name}: {e}")

if __name__ == "__main__":
    main()
