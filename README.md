
THIS IS UNTESTED NOT READY FOR PRODUCTION DEPLOYMENT -->  You have been warned.

# DeAI-Core
Attempt to create a Decentralized AI core so that the data is not sent to centralized servers and deletes itself when the session is over instead of storing sessions for privacy intrusion on corporation servers, utilizing IPFS as a workaround for Web3 compatibility.

* It is a TEMPLATE.  Click the button above to make a new repo based on this one as the template if you want to work on a clone of it, this way you don't have to fork it if this is a preferred route.  Templates make it easy! 

You have permission to use this open sourced app as a template for mods to public AI that are able to be private truly without leaking your conversations and metadata to centralization servers.  Instead, this approach stores the temporary session in PGP encrypted IPFS folder files and deletes the data when the conversation is finished so there is no log of your talking or associations with your metadata.

Web3 integetration is welcome.  Post an Issue if you'd like to become part of this project or a white-labeled partner or seek to integrate this into your corporate AI model to give the people true privacy instead of leaking it to the data tracking servers that store all known data for centralized use [abuse] of privacy.

Below is an untested set of instructions report any issues in the Issues area.  Thanks!  Lets bring this project to fruition!  Its a great vision!  

Willing to build discord around this project if enough interest is occuring.

===

### 2. Setting Up and Running the App Locally on Ubuntu

#### Step 1: Install Node.js and npm

Since this project uses Node.js for both frontend and backend, you’ll need to install Node.js if it’s not already installed:

bash
sudo apt update
sudo apt install nodejs npm -y


Verify the installation by checking versions:

bash
node -v
npm -v


#### Step 2: Clone the GitHub Repository Locally

In your preferred directory, clone the repository from GitHub:

bash
git clone [https://github.com/yourusername/web3-qa-app.git](https://github.com/Decentralized-AI-core/DeAI-Core.git)
cd web3-qa-app


#### Step 3: Install Dependencies

Navigate to the project’s backend and frontend directories and install dependencies:

1. In the `backend` folder:
   bash
   cd backend
   npm install
   

2. If there are Python components, install dependencies using `requirements.txt`:
   bash
   pip install -r requirements.txt
   

#### Step 4: Set Up Environment Variables

Create a `.env` file in the `backend` folder to store API keys and other environment variables. This file should include:


OPENAI_API_KEY=your_openai_api_key
OTHER_AI_API_KEY=your_other_ai_key


> **Note**: If you don’t have real API keys, you can replace these values with dummy strings for testing purposes. However, the actual AI API calls may not work without valid keys.

#### Step 5: Start the Backend Server

1. Ensure you’re in the `backend` directory.
2. Start the server:
   bash
   node server.js
   

This will run the server on `http://localhost:3000` by default.

#### Step 6: Run the Frontend App

1. Open another terminal and navigate to the `frontend` folder.
2. Install any frontend dependencies:
   bash
   npm install
   
3. If you’re using a bundler like `vite` or `webpack` (recommended for React projects), you may need to start it using a command like:
   bash
   npm start
   

Now, your app should be running locally! Open a browser and navigate to `http://localhost:3000` to interact with the Q&A app interface.

---

### 3. Testing the App

To test locally, follow these steps:

1. **Submit Questions**: In the frontend interface at `http://localhost:3000`, type a question and click the “Ask” button.
2. **View Responses**: After the backend processes your question, AI-generated responses should display in the frontend.
3. **End Session**: To test session deletion, click the “End Session” button.

---

### 4. GitHub Hosting (Optional for Static Files)

For a fully hosted version, consider using GitHub Pages for the frontend. You can host the frontend files on GitHub Pages by following these steps:

1. Build the frontend project (if using a bundler like `vite`):
   bash
   npm run build
   
   
2. Push the `dist` or `build` directory to GitHub in a branch named `gh-pages` and enable GitHub Pages in your repository settings to serve static files.

> **Note**: This only applies to the frontend and may not be compatible with backend services unless deployed to a separate hosting provider (e.g., AWS, Heroku, Vercel) or Docker.

---

### 5. Tips for Local Development and Testing

- **Monitor Logs**: Check both backend and frontend terminal windows for log outputs to debug issues.
- **Environment Variables**: For secure API usage, make sure `.env` is added to your `.gitignore` file to prevent accidental exposure of sensitive information on GitHub.
- **Testing Without Real API Keys**: You can mock API responses in your backend to simulate interaction without calling actual AI APIs during initial testing.

This setup should help you fully test and host the Web3 Q&A App locally on Ubuntu and on GitHub.

Post any issues locally to troubleshoot them in the Issues area.  A Wiki will be made later if community interest in the privacy of your AI Q and A sessions becomes useful to people and they fork or utilize this github for researching this unique approach!

- The Decentralized AI Dev Team
