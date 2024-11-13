
# projectname:- focuslearn.online


### Key Points in the README:
- **Project Overview**: Brief description of the project and its features.
- **Tech Stack**: Technologies used to build the project.
- **Installation Instructions**: Step-by-step guide to set up the project locally.
- **API Integration**: Details on how the YouTube API is integrated and how to get an API key.
- **Component Breakdown**: Explanation of major components like `WatchPlaylist` and `SideBarVideoCard`.
- **Usage**: Instructions on how to use the app once it's up and running.
- **Author & Acknowledgments**: Your information and a thanks section for external libraries/APIs used.

## Overview
focuslearn.online is a web application that allows users to watch YouTube playlist videos without distractions. It offers a clean user interface, featuring a distraction-free viewing experience and the ability to track progress in videos. Users can select videos as "watched" and mark their progress, similar to platforms like Udemy or Coursera.

This project leverages React, Tailwind CSS, and the YouTube API to fetch playlist details and display them to the user.

## Features
- **Distraction-free video watching**: Search Your Youtube  Playlist and watch videos without suggestions, comments, or UI elements cluttering the experience.
- **Progress tracking**: Users can select videos as watched to track their progress through the playlist.
- **Motivation quotes**: Display random motivational quotes to encourage learning during breaks.
- **Dynamic playlist management**: Fetches and displays playlists from YouTube using the YouTube API.
- **Sidebar video list**: A sidebar lists all videos in the playlist, allowing users to click and view specific videos with their titles and video lengths.
- **Responsive design**: Fully responsive layout using Tailwind CSS, making the app usable on desktops, tablets, and mobile devices.

## Tech Stack
- **Frontend**: 
  - React.js
  - Tailwind CSS
  - Axios for API calls
- **API**: 
  - YouTube Data API v3
- **State Management**:
  - React useState and useContext for global state management



## Installation

### Prerequisites
Make sure you have the following installed on your system:
- Node.js (version 12.x or higher)
- NPM (or Yarn)

### Steps to Install and Run
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/bibekghoshh/foucslearn.git
2. Install dependencies:
    ```bash
    npm install
3. Create a .env file, Add your YouTube API key in the .env file:
    ```bash
    export const apiKey="Your API key"
4. Run the application:
    ```bash
    npm start
    
The app will start at http://localhost:3000.

## How to Use

1. Navigate to the home page and enter a valid YouTube playlist URL.
2. Select a video Playlist from the below to start watching.
3. Mark videos as watched by clicking the checkbox icon next to the video title.
4. Track your progress with the built-in progress bar.
5. Enjoy motivational quotes to keep you inspired while studying.


## Future Enhancements
1. User Authentication: Allow users to log in and save their progress.
2. User Dashboard: Create a dashboard for users to see overall progress across multiple playlists.

3. Contributions are welcome! Please submit a pull request or open an issue for any improvements or features you'd like to add.


Contact
Author: Bibek Ghosh
Portfolio: [bibekghosh.live](https://www.bibekghosh.live/)
LinkedIn: [Linkedin](https://www.linkedin.com/in/bibekghoshh/)
