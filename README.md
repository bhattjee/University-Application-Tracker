# 🎓 UniTrack — University Application Dashboard

<div align="center">

A modern, full-stack application dashboard for tracking university applications to Germany and Austria. Manage your application process with real-time status tracking, deadline monitoring, and intuitive drag-and-drop organization.

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.0+-47A248)](https://www.mongodb.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-endpoints) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Security](#-security)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

UniTrack is a comprehensive application tracking system designed specifically for students applying to universities in Germany and Austria. The dashboard provides a centralized platform to manage application deadlines, track submission status, organize application requirements, and monitor progress across multiple institutions.

### Key Benefits

- **Centralized Management**: Track all applications in one place with country-based organization
- **Real-time Updates**: Instant status changes with auto-save functionality
- **Deadline Awareness**: Visual indicators for approaching and expired deadlines
- **Flexible Organization**: Drag-and-drop reordering to prioritize applications
- **Comprehensive Data**: Track fees, portal links, course details, and application steps

---

## ✨ Features

### Core Functionality

- **📊 Dashboard Overview**
  - Real-time statistics (Total, In Progress, Submitted, Accepted, Rejected)
  - Country-based application grouping (Germany & Austria)
  - Visual status indicators with color-coded badges

- **📝 Application Management**
  - Create, read, update, and delete applications
  - Inline cell editing for quick updates
  - Full edit modal for comprehensive changes
  - Bulk reordering via drag-and-drop

- **🔍 Filtering & Sorting**
  - Filter by application status (Not Opened, In Progress, Submitted, Accepted, Rejected, Expired, Withdrawn)
  - Filter by Uni-Assist applications
  - Sort by various criteria

- **📅 Deadline Tracking**
  - Application start date and deadline management
  - Visual deadline warnings (yellow: within 14 days, red: expired)
  - Date formatting and display

- **🔗 Link Management**
  - Portal links for application portals
  - Course site links
  - Additional resource links

- **💰 Fee Tracking**
  - Application fee management
  - Uni-Assist fee defaults (€30)
  - Direct application fee tracking

- **📋 Application Steps**
  - Customizable application step tracking
  - Multi-line text support for detailed requirements
  - Preview modal for extended content

### User Experience

- **🎨 Modern UI**
  - Dark theme with professional color scheme
  - Responsive design for desktop and mobile
  - Smooth animations and transitions
  - Custom scrollbars and visual feedback

- **⌨️ Keyboard Shortcuts**
  - `Ctrl/Cmd + N`: Open Add Application modal
  - `Escape`: Close modals
  - `Enter`: Save inline edits

- **🔄 Auto-Save**
  - Automatic saving on cell edit completion
  - Manual "Save All" button for bulk operations
  - Connection status indicator

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript | - |
| **Backend** | Node.js + Express.js | ^4.18.2 |
| **Database** | MongoDB | ^8.0.3 |
| **ODM** | Mongoose | ^8.0.3 |
| **CORS** | cors | ^2.8.5 |
| **Dev Tools** | nodemon | ^3.0.2 |

---

## 📦 Prerequisites

Before installing UniTrack, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
  - Download: https://nodejs.org
  - Verify: `node --version`

- **MongoDB Community Server** (v7.0 or higher)
  - Download: https://www.mongodb.com/try/download/community
  - Verify: `mongosh --version`

- **npm** (comes with Node.js)
  - Verify: `npm --version`

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/uni-application-tracker.git
cd uni-application-tracker
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `mongoose` - MongoDB object modeling
- `cors` - Cross-origin resource sharing
- `nodemon` - Development auto-restart tool

### Step 3: Start MongoDB

**On macOS (with Homebrew):**
```bash
brew services start mongodb-community
```

**On Windows:**
```bash
# Option 1: Via Services
# Open Services → Start "MongoDB"

# Option 2: Command line
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
```

**On Linux (Ubuntu/Debian):**
```bash
sudo systemctl start mongod
```

**Verify MongoDB is running:**
```bash
mongosh
# You should see the MongoDB shell prompt
```

### Step 4: Configure Environment Variables (Optional)

Create a `.env` file in the project root:

```env
PORT=3001
MONGODB_URI=mongodb://127.0.0.1:27017/uni_tracker
```

### Step 5: Start the Application

**Production mode:**
```bash
npm start
```

**Development mode (with auto-restart):**
```bash
npm run dev
```

You should see:
```
✅ Connected to MongoDB at mongodb://127.0.0.1:27017/uni_tracker
🚀 Server running at http://localhost:3001
📊 Dashboard: http://localhost:3001
```

### Step 6: Access the Dashboard

Open your browser and navigate to:
```
http://localhost:3001
```

---

## ⚙️ Configuration

### MongoDB Connection

**Default connection:**
```javascript
mongodb://127.0.0.1:27017/uni_tracker
```

**Custom connection via environment variable:**
```bash
MONGODB_URI=mongodb://localhost:27017/custom_db npm start
```

**Cloud MongoDB (MongoDB Atlas):**
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/uni_tracker npm start
```

### Port Configuration

**Default port:** `3001`

**Custom port:**
```bash
PORT=4000 npm start
```

Or via environment variable in `.env` file.

---

## 📖 Usage

### Adding a New Application

1. Click the **+ Add Entry** button in the controls bar
2. Or click the **＋** floating action button (FAB) in the bottom-right corner
3. Fill in the application details:
   - **Country**: Germany or Austria
   - **University Name**: Required
   - **Course Name**: Optional
   - **Application Dates**: Start date and deadline
   - **Status**: Select from predefined statuses
   - **Links**: Portal, course site, and additional links
   - **Uni-Assist**: Toggle if application goes through Uni-Assist
   - **Application Fee**: Enter fee amount (defaults to €30 for Uni-Assist)
   - **Institution Type**: Public, Private, Technical University, etc.
   - **Steps**: Detailed application requirements
4. Click **Save** to create the application

### Editing Applications

**Inline Editing:**
- Click any cell in the table to edit directly
- Changes auto-save on blur or Enter key
- Status and dropdown fields use inline selects

**Full Edit Mode:**
- Click the ✏ icon in the Actions column
- Opens the full edit modal with all fields
- Make changes and click **Save**

### Deleting Applications

1. Click the 🗑 icon in the Actions column
2. Confirm deletion in the confirmation dialog
3. Application is permanently removed from the database

### Reordering Applications

- Grab the ⠿ drag handle on the left of any row
- Drag to reorder within the same country section
- Release to save the new order
- Changes are automatically persisted

### Filtering Applications

**By Status:**
- Click status filter buttons (All, Not Opened, In Progress, etc.)
- Active filter is highlighted in blue

**By Uni-Assist:**
- Click Uni-Assist filter buttons (All, Yes, No)
- Quickly find applications requiring Uni-Assist processing

**Sorting:**
- Use the Sort dropdown to change display order
- Options include: Default, Deadline, University Name, Status

### Viewing Application Steps

- Steps are displayed in a truncated preview (2 lines max)
- Click the **View Steps** button to see full content
- Opens a dedicated modal with complete step details

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:3001/api
```

### Applications

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/applications` | Fetch all applications | - |
| `GET` | `/applications/country/:country` | Filter by country (Germany/Austria) | - |
| `POST` | `/applications` | Create new application | Application object |
| `PUT` | `/applications/:id` | Update application by ID | Updated fields |
| `PUT` | `/applications/reorder/bulk` | Bulk reorder applications | `{ orders: [{ id, order }] }` |
| `DELETE` | `/applications/:id` | Delete application by ID | - |

### Request/Response Examples

**Create Application:**
```json
POST /api/applications
{
  "country": "Germany",
  "universityName": "Technical University of Munich",
  "courseName": "Computer Science",
  "applicationStartDate": "2024-01-15",
  "applicationDeadline": "2024-05-15",
  "status": "In Progress",
  "portalLink": "https://example.com/apply",
  "courseSiteLink": "https://example.com/course",
  "otherLinks": "",
  "isUniAssist": true,
  "applicationFee": 30,
  "institutionType": "Technical University",
  "steps": "1. Register\n2. Upload documents\n3. Submit"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k",
    "country": "Germany",
    "universityName": "Technical University of Munich",
    "status": "In Progress",
    "order": 0,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## 📁 Project Structure

```
uni-application-tracker/
├── public/
│   └── index.html              # Frontend dashboard (single-file)
├── models/
│   └── Application.js          # MongoDB schema and model
├── server.js                   # Express server and API routes
├── package.json                # Dependencies and scripts
├── package-lock.json           # Dependency lock file
├── .env                        # Environment variables (optional)
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

### File Descriptions

- **`server.js`**: Main Express server with API endpoints, MongoDB connection, and middleware configuration
- **`models/Application.js`**: Mongoose schema defining the application data structure with validation
- **`public/index.html`**: Complete frontend with embedded CSS and JavaScript for the dashboard UI

---

## 🔧 Development

### Running in Development Mode

```bash
npm run dev
```

Uses `nodemon` for automatic server restart on file changes.

### Adding New Features

1. **Add new API endpoint** in `server.js`
2. **Update data model** in `models/Application.js` if needed
3. **Update frontend** in `public/index.html`
4. **Test** the changes locally

### Code Style

- Use ES6+ JavaScript features
- Follow existing code structure and conventions
- Add comments for complex logic
- Maintain consistent indentation (2 spaces)

---

## 🔒 Security

### Current Security Practices

- **Environment Variables**: Sensitive configuration via `process.env`
- **Local MongoDB Default**: No hardcoded credentials in source code
- **CORS Enabled**: Configurable cross-origin resource sharing
- **Input Validation**: Mongoose schema validation on all fields

### Recommendations for Production

1. **Use MongoDB Atlas** for cloud database with authentication
2. **Add authentication/authorization** for multi-user support
3. **Implement rate limiting** on API endpoints
4. **Add HTTPS** with SSL/TLS certificates
5. **Use environment variables** for all sensitive data
6. **Add input sanitization** for additional security
7. **Implement logging** for audit trails
8. **Add CORS restrictions** to specific domains only

### Environment Variables

Create a `.env` file (never commit to Git):

```env
PORT=3001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/uni_tracker
NODE_ENV=production
```

---

## 🔧 Troubleshooting

### Common Issues

| Problem | Solution |
|---------|----------|
| **Cannot connect to backend** | Ensure `npm start` is running and MongoDB is active |
| **MongoDB connection error** | Verify MongoDB service: `mongosh` to test connection |
| **Port 3001 already in use** | Use different port: `PORT=3002 npm start` |
| **npm install fails** | Try: `npm install --legacy-peer-deps` |
| **Data not persisting** | Check MongoDB is running (not in-memory mode) |
| **Changes not reflecting** | Clear browser cache or try hard refresh |
| **Uni-Assist fee not defaulting** | Check JavaScript console for errors |

### MongoDB Issues

**MongoDB not starting:**
```bash
# Check MongoDB status
sudo systemctl status mongod  # Linux
brew services list            # macOS
# Check Windows Services
```

**MongoDB data directory:**
```bash
# Linux/macOS
sudo mkdir -p /data/db
sudo chown -R $USER /data/db

# Windows
mkdir C:\data\db
```

### Node.js Issues

**Version too old:**
```bash
# Upgrade Node.js using nvm (Linux/macOS)
nvm install 18
nvm use 18

# Or download from nodejs.org (Windows)
```

**Permission errors:**
```bash
# Fix npm permissions (Linux/macOS)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Write clear, descriptive commit messages
- Follow existing code style and structure
- Test your changes thoroughly
- Update documentation as needed
- Ensure all tests pass (if tests are added)

### Reporting Issues

When reporting bugs, please include:
- Operating system and version
- Node.js and MongoDB versions
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2024 UniTrack

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR otherwise, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review troubleshooting section

---

<div align="center">

**Built with ❤️ for students pursuing education abroad**

[⬆ Back to Top](#-university-application-dashboard)

</div>