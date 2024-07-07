Here are the steps to set up our project with HTML, CSS, JavaScript, and images in Visual Studio Code (VS Code):Step 1: Create a new folder for your project

Open VS Code and click on the "Explorer" icon in the left sidebar or press Ctrl + Shift + E (Windows/Linux) or Cmd + Shift + E (Mac) to open the Explorer panel.
Click on the "New Folder" button or press Ctrl + Shift + N (Windows/Linux) or Cmd + Shift + N (Mac) to create a new folder.
Name your folder (e.g., "TempleProject").



Step 2: Create subfolders for your project

Inside the project folder, create the following subfolders:
html: for your HTML files
css: for your CSS files
js: for your JavaScript files
images: for your image files
pdfs: for your PDF files (if you plan to upload devotional books)



Step 3: Create your HTML file

Inside the html folder, create a new file called index.html (or any other name you prefer).
Open the file and add the basic HTML structure:


<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temple Project</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- Your HTML content here -->
    <script src="../js/script.js"></script>
</body>
</html>



Step 4: Create your CSS file

Inside the css folder, create a new file called style.css (or any other name you prefer).
Open the file and add your CSS styles:

/* style.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}

Step 5: Create your JavaScript file

Inside the js folder, create a new file called script.js (or any other name you prefer).
Open the file and add your JavaScript code:

// script.js
console.log("JavaScript is working!");



Step 6: Add images to your project

Inside the images folder, add your image files (e.g., temple images).



Step 7: Configure VS Code settings (optional)

If you want to use a specific editor setting or extension for your project, you can create a settings.json file in the root of your project folder.
For example, you can add the following settings to configure the editor to use spaces instead of tabs:// settings.json
{
    "editor.insertSpaces": true,
    "editor.tabSize": 4
}

Step 8: Open your project in VS Code

Open VS Code and select "File" > "Open Folder" (or press Ctrl + K then Ctrl + O on Windows/Linux or Cmd + K then Cmd + O on Mac).
Select the project folder you created in Step 1.
That's it! You now have a basic project structure set up in VS Code with HTML, CSS, JavaScript, and images. You can start building your Temple Project from here.
