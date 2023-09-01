# How to Pull Request ?
Creating a pull request in GitHub involves several steps, and you typically don't write the actual pull request description in Markdown. However, you can use Markdown for formatting and providing context within your pull request description. Here's a guide on how to create a pull request in GitHub with a Markdown-enhanced description:

1. **Fork the Repository:**

   Go to the GitHub repository you want to contribute to and click the "Fork" button in the upper right corner. This will create a copy of the repository in your GitHub account.

2. **Clone the Forked Repository:**

   Use `git clone` to copy the forked repository to your local machine. Replace `username` with your GitHub username and `repository` with the repository name.

   ```bash
   git clone https://github.com/username/repository.git
   ```

3. **Create a New Branch:**

   It's a good practice to create a new branch for your changes. This keeps your changes isolated from the `main` or `master` branch. Use the following command to create and switch to a new branch:

   ```bash
   git checkout -b my-feature-branch
   ```

4. **Make Your Changes:**

   Make the necessary changes to the code, documentation, or any other files in your local repository.

5. **Commit Your Changes:**

   Commit your changes to the branch with a descriptive commit message. Markdown is not required for commit messages, but you can use it for clarity:

   ```bash
   git add .
   git commit -m "Add feature XYZ (Fixes #123)"
   ```

6. **Push Your Changes:**

   Push your branch to your forked repository on GitHub:

   ```bash
   git push origin my-feature-branch
   ```

7. **Create the Pull Request:**

   Go to your forked repository on GitHub and switch to the branch you just pushed. You should see a green "Compare & pull request" button. Click it.

8. **Write the Pull Request Description (in Markdown):**

   In the pull request description, you can use Markdown to format your text and provide context. Here's an example:

   ```markdown
   ## Description

   This pull request adds a new feature that enhances the user experience.

   ## Changes Made

   - Added a new feature XYZ
   - Improved the performance of the existing code

   ## Screenshots

   ![Screenshot 1](screenshots/screenshot1.png)
   ![Screenshot 2](screenshots/screenshot2.png)

   ## Related Issues

   - Closes #123
   - Fixes #456

   ## Checklist

   - [x] Tested the changes locally
   - [ ] Updated documentation
   - [ ] Reviewed code for potential issues
   ```

9. **Create the Pull Request:**

   After writing the description, click the "Create pull request" button. Your pull request will be submitted to the original repository for review.

10. **Review and Collaboration:**

    Collaborators and maintainers of the original repository can review your pull request, provide feedback, and discuss any changes needed.

11. **Merge the Pull Request:**

    Once the pull request is approved, a maintainer can merge it into the main branch of the original repository.

That's it! You've successfully created a pull request on GitHub with a Markdown-enhanced description. Make sure to follow any specific contribution guidelines provided by the repository maintainers.