# How to Deploy "Saada Store" to Netlify

This guide will walk you through deploying your React/Vite application to Netlify.

## ✅ Prerequisites

1.  **Project Files:** Ensure you have all your project files (this folder).
2.  **Build Check:** We have already successfully ran `npm run build` to verify the code is ready.
3.  **Netlify Account:** Sign up for free at [netlify.com](https://www.netlify.com/).

---

## 🚀 Option 1: The Easiest Way (Drag & Drop)

This method requires **no coding knowledge** and takes 30 seconds.

1.  **Open your project folder** on your computer.
2.  **Locate the `dist` folder.**
    *   *Note: This folder is created when you run `npm run build`. If you don't see it, open your terminal in the project folder and run `npm run build`.*
3.  **Log in to Netlify.**
4.  Go to the **"Sites"** tab in your Netlify dashboard.
5.  **Drag and drop the `dist` folder** (not the whole project, ONLY the `dist` folder) into the dotted area that says "Drag and drop your site output folder here".
6.  **Done!** Netlify will give you a live URL immediately.

---

## 🔗 Option 2: The Recommended Way (Git/GitHub)

This method is better because it updates your site automatically whenever you save changes to your code.

### Step 1: Push code to GitHub
1.  Create a new repository on [GitHub](https://github.com/).
2.  Push your project files to this repository (if you haven't already).

### Step 2: Connect Netlify to GitHub
1.  Log in to [Netlify](https://www.netlify.com/).
2.  Click **"Add new site"** > **"Import from an existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify and choose your `saada-store` repository.

### Step 3: Configure Build Settings
Netlify should detect these automatically, but double-check them:

*   **Build Command:** `npm run build`
*   **Publish Directory:** `dist`

5.  Click **"Deploy Site"**.

---

## ⚙️ Important Configuration (Already Done!)

I have already created a special file named `public/_redirects` for you with the following content:

```
/*  /index.html  200
```

**Why is this important?**
Because this is a Single Page Application (SPA), without this file, if a user refreshed the page while on `/contact` or `/about`, they would get a "404 Page Not Found" error. This file ensures Netlify handles these links correctly.

---

## 🎉 Post-Deployment Tips

*   **Custom Domain:** You can buy a domain like `saadastore.com` and connect it in "Domain Settings" on Netlify.
*   **SSL:** Netlify provides a free HTTPS certificate automatically.
