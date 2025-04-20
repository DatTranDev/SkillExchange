# Skill Exchange

**Skill Exchange** is an app designed to connect users for skill exchange. Users can register, choose skills they want to exchange, and join a learning community. The app uses a Tinder-like matching mechanism, where users swipe right to accept and left to deny, creating meeting rooms for skill exchanges and mutual evaluations.

## Key Features

### Login / Logout
- Users can register and log in to the system.
- During registration, users need to select a skill topic, describe their skill, provide portfolio information (where they studied or worked), and can add other skills of interest.
- Add certificate images and an avatar to complete the profile.
- Each user starts with an **elo rank of 0**.

### Matching System
- The matching mechanism works like Tinder:
  - **Swipe right** to **accept**.
  - **Swipe left** to **deny**.
- When two users match, a request is sent, and they wait for the partner’s acceptance.

### Meeting Room Creation
- When two users match successfully, a meeting room is created for them to exchange skills.
- Core features in the meeting room:
  - **Chat** in real-time.
  - **Evaluate the skill** of the partner (elo increases for the evaluated person and the evaluator, but the evaluator gets a smaller elo increase).
  - **Cancel the meeting room** if they no longer wish to continue.

### Upgrade Features
- **Rank avatar upgrade** based on the user's elo score (similar to a game rank system).
- **Expand functionality for high-ranked users**:
  - Users with higher elo can open meeting rooms for more participants.
  - Normal users can also join those larger meeting rooms.

## Setup and Usage

### Requirements
- Node.js >= 14.x
- Expo CLI

### Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/DatTranDev/SkillExchange.git
   cd SkillExchange
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app on an emulator or physical device:
   ```bash
   npx expo start
   ```
### Screenshots
<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/expensetracker-214d3.appspot.com/o/searching.jpg?alt=media&token=e7f13f50-5260-4b70-9747-7515335e0889" alt="Searching" width="200" style="border-radius: 20px; margin-right: 10px;"/>
  <img src="https://firebasestorage.googleapis.com/v0/b/expensetracker-214d3.appspot.com/o/matching.jpg?alt=media&token=7efc59cd-0c41-49ad-a3c2-cc57dc05c5a5" alt="Matching" width="200" style="border-radius: 20px; margin-right: 10px;"/>
  <img src="https://firebasestorage.googleapis.com/v0/b/expensetracker-214d3.appspot.com/o/register.jpg?alt=media&token=1634eecb-2d4d-4853-b7ff-e34f8791ddd9" alt="Register" width="200" style="border-radius: 20px;"/>
</p>

### Tools and Libraries Used
- **Expo JS**: Mobile app development framework.
- **React Navigation**: Used for navigation between screens in the app.
- **Firebase**: Used for user management, data storage, and push notifications.
- **Socket.io**: Used for real-time chat features in meeting rooms.

## APK Installation
You can download and install the APK from the following link:  
[Download APK](https://drive.google.com/file/d/10HlYnMGxWLUxgg4enMO8mH3A1-xUr4h9/view)
> **Note:** As we are using a free server, the startup time may take up to 1 minute. Thank you for your patience!
