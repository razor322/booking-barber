from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        try:
            print("Navigating to Home...")
            page.goto("http://localhost:5173/")
            time.sleep(3) # Wait for animations

            page.screenshot(path="updated_home_hero.png")
            print("Hero screenshot taken.")

            # Scroll to services
            print("Scrolling to Services...")
            page.evaluate("window.scrollBy(0, 800)")
            time.sleep(2)
            page.screenshot(path="updated_home_services.png")

            # Scroll to testimonials
            print("Scrolling to Testimonials...")
            page.evaluate("window.scrollBy(0, 800)")
            time.sleep(2)
            page.screenshot(path="updated_home_testimonials.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
