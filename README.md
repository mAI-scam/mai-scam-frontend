# mAIscam - Web Extension Demo Website

🌐 **Live Demo**: [https://mai-scam.vercel.app/](https://mai-scam.vercel.app/)

🛡️ **AI-powered anti-scam browser extension for Southeast Asia**

This demo website showcases how the mAIscam browser extension protects users from scams across emails, websites, and social media platforms with real-time AI detection in 13 Southeast Asian languages.

## 🚀 For Judges & Evaluators

### **IMPORTANT: Installing the Actual Extension**
This website is for demonstration purposes. To experience the **real mAIscam extension**:

1. **Download the extension**: Visit [GitHub Releases](https://github.com/mAI-scam/mai-scam-extension/releases/tag/v1.0.1)
2. **Download**: `maiscam-1.0.0-chrome.zip`
3. **Install**: Extract the zip file and load as unpacked extension in Chrome
4. **Detailed Instructions**: Visit `/installation` page on this website for step-by-step guide

### Quick Installation Steps:
```
1. Download maiscam-1.0.0-chrome.zip from GitHub releases
2. Extract the files
3. Open Chrome → chrome://extensions/
4. Enable "Developer mode"
5. Click "Load unpacked" → Select extracted folder
6. Extension ready to use!
```

**⏱️ Note**: First detection takes 15-30 seconds (AWS Lambda cold start), then 2-5 seconds for subsequent detections.

## 🎯 What This Demo Website Shows

### Website Features:
- **Live Demo**: Interactive website simulation of extension functionality
- **Installation Guide**: Complete setup instructions for judges and users
- **Multiple Demos**: Email, website, and social media scam detection scenarios
- **Admin Dashboard**: Real-time analytics at [mai-scam-admin.vercel.app](https://mai-scam-admin.vercel.app/)

### Extension Capabilities:
- **📧 Email Protection**: Gmail scam detection with SEA-LION v4 AI
- **🌐 Website Security**: Real-time URL validation and phishing detection
- **📱 Social Media Guard**: Twitter & Facebook post analysis with image recognition
- **🌏 Multilingual**: 13 Southeast Asian languages support
- **🚨 Real-time Alerts**: Instant threat notifications and risk assessments

## 🔧 Testing the Extension

**Safe Testing Environment**:
- Test website: [shoppe123.vercel.app](https://shoppe123.vercel.app/) (simulated phishing site for safe testing)
- Never use real phishing websites for testing

## 💻 Running This Demo Website

### Prerequisites
- Node.js 18+
- Chrome browser (for extension testing)

### Setup
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Tech Stack
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Components**: shadcn/ui, Lucide React
- **State**: Zustand
- **Demo Features**: Driver.js (interactive walkthrough)
- **Deployment**: Vercel

## 📊 Project Architecture

### Repositories:
- **Extension**: [mai-scam-extension](https://github.com/mAI-scam/mai-scam-extension) - Browser extension source code
- **Backend API**: [mai-scam-backend](https://github.com/mAI-scam/mai-scam-backend) - AI processing services
- **Demo Website**: This repository - Interactive demonstration
- **Admin Dashboard**: [mai-scam-admin](https://github.com/mAI-scam/mai-scam-admin) - Analytics platform

## 🎬 Demo Videos
- **Project Pitch**: [YouTube](https://www.youtube.com/embed/MUg4EGxcHro)
- **Demo Walkthrough**: [YouTube](https://www.youtube.com/embed/rNhK1GPuOu0)

## 📝 For Non-Technical Judges

This website provides an easy way to understand our extension without installation. However, for the **complete experience** and **real protection**, please follow the installation guide to use the actual browser extension.

The demo website simulates the extension's functionality for illustration, but the real extension offers:
- ✅ **Live protection** while browsing
- ✅ **Real-time AI analysis**
- ✅ **Automatic threat blocking**
- ✅ **Enhanced security features**

---

**🔗 Links**: [Extension Download](https://github.com/mAI-scam/mai-scam-extension/releases) | [Installation Guide](/installation) | [Admin Dashboard](https://mai-scam-admin.vercel.app/) | [GitHub Organization](https://github.com/mAI-scam)
