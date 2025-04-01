import subprocess
import sys
from pathlib import Path

def push_to_github():
    """
    Script to push the Hugo project to GitHub
    """
    print("Pushing Hugo portfolio to GitHub Pages...")
    
    try:
        # Check if git is installed
        subprocess.run(["git", "--version"], check=True, capture_output=True)
        
        # Check if remote is set up
        result = subprocess.run(["git", "remote", "-v"], capture_output=True, text=True)
        
        if "origin" not in result.stdout:
            print("Setting up GitHub repository...")
            subprocess.run(["git", "remote", "add", "origin", "https://github.com/schrmm/schrmm.github.io.git"], check=True)
            print("Remote repository configured.")
        
        # Add all files
        print("Staging changes...")
        subprocess.run(["git", "add", "."], check=True)
        
        # Check if there are changes to commit
        status = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True)
        if not status.stdout.strip():
            print("No changes to commit.")
            return
        
        # Commit changes
        message = input("Enter commit message [Update portfolio]: ").strip()
        if not message:
            message = "Update portfolio"
        
        print(f"Committing with message: '{message}'")
        subprocess.run(["git", "commit", "-m", message], check=True)
        
        # Push to GitHub
        print("Pushing to GitHub...")
        result = subprocess.run(["git", "push", "-u", "origin", "main"], capture_output=True, text=True)
        
        if "rejected" in result.stderr:
            print("\nRepository conflict detected. Attempting to resolve...")
            choice = input("Pull changes from remote first? (y/n) [y]: ").strip().lower()
            if choice == "" or choice == "y":
                subprocess.run(["git", "pull", "--rebase", "origin", "main"], check=True)
                subprocess.run(["git", "push", "-u", "origin", "main"], check=True)
            else:
                print("Please resolve conflicts manually.")
                return
        
        print("\nSuccessfully pushed to GitHub!")
        print("GitHub Actions will now build and deploy your site.")
        print("Your site will be available soon at: https://schrmm.github.io")
        
    except subprocess.CalledProcessError as e:
        print(f"\nError: Command failed with exit code {e.returncode}")
        if e.stderr:
            print(f"Details: {e.stderr.decode('utf-8')}")
        print("\nFailed to push to GitHub. Please check the error message above.")
        return

if __name__ == "__main__":
    push_to_github()
