# Men's Mental Health Survey

A full-stack MERN survey and analytics application built with Next.js, TypeScript, and Tailwind CSS. This application collects anonymous survey responses about men's mental health experiences and displays real-time visualizations using Recharts.

## Features

- 🔒 **Anonymous Survey Collection**: No personally identifiable information collected
- 📊 **Real-Time Analytics Dashboard**: Live insights with interactive charts
- 🎨 **Modern UI**: Built with Tailwind CSS for a responsive design
- 🔐 **Secure API Routes**: Protected endpoints for data operations
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🚀 **Fast Performance**: Optimized with Next.js server-side rendering

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB
- **Charts**: Recharts
- **Deployment**: Vercel

## Pages

1. **Landing Page (/)**: Introduction and call-to-action
2. **Survey (/survey)**: Anonymous survey form with conditional questions
3. **Live Insights (/insights)**: Real-time analytics dashboard with visualizations
4. **About (/about)**: Project information and mission
5. **Ethics (/ethics)**: Privacy policy and ethical considerations

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JHaydenDev/Male-Therapy-Survey.git
cd Male-Therapy-Survey
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.local.example .env.local
```

4. Add your MongoDB connection string to `.env.local`:
```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/male-therapy-survey?retryWrites=true&w=majority
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add the `MONGODB_URI` environment variable in Vercel project settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JHaydenDev/Male-Therapy-Survey)

## API Routes

### POST /api/responses
Submit a new survey response.

**Request Body:**
```json
{
  "age": "25-34",
  "hasAttendedTherapy": true,
  "reasonsForTherapy": ["Anxiety", "Depression"],
  "willingnessToRecommend": 8,
  "perceivedStigma": 6,
  "mostHelpfulAspect": "Having someone to talk to",
  "barriers": ["Cost", "Time constraints"],
  "preferredFormat": "Online video",
  "additionalComments": "Very helpful experience"
}
```

### GET /api/responses
Retrieve all survey responses (for admin purposes).

### GET /api/analytics
Get aggregated analytics data including:
- Total responses
- Therapy attendance rate
- Average stigma score
- Average willingness to recommend
- Age distribution
- Top reasons for therapy
- Top barriers
- Preferred formats

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── analytics/
│   │   │   └── route.ts
│   │   └── responses/
│   │       └── route.ts
│   ├── about/
│   │   └── page.tsx
│   ├── ethics/
│   │   └── page.tsx
│   ├── insights/
│   │   └── page.tsx
│   ├── survey/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Navigation.tsx
├── lib/
│   └── mongodb.ts
├── models/
│   └── SurveyResponse.ts
└── types/
    └── survey.ts
```

## Contributing

This project aims to reduce stigma around men's mental health. Contributions are welcome! Please ensure your changes:

- Maintain user privacy and anonymity
- Follow the existing code style
- Include appropriate error handling
- Are tested locally before submitting

## License

MIT License - feel free to use this project for educational or research purposes.

## Disclaimer

This survey is for research and educational purposes only. It is not a substitute for professional mental health care. If you're experiencing a mental health crisis, please contact emergency services or the National Suicide Prevention Lifeline at 988.

## Resources

- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **SAMHSA National Helpline**: 1-800-662-4357
