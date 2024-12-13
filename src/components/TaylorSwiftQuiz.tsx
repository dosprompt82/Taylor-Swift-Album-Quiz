import React, { useState } from 'react';
import TipButton from "./TipButton";

// Define our TypeScript interfaces
interface Option {
  text: string;
  albums: AlbumKey[];
}

interface Question {
  question: string;
  options: Option[];
}

interface Album {
  title: string;
  description: string;
  score: number;
}

type AlbumKey = 'debut' | 'fearless' | 'speakNow' | 'red' | 'nineteenEightyNine' | 
                'reputation' | 'lover' | 'folklore' | 'evermore' | 'midnights' | 'torturedPoets';

// Changed this type definition
type Albums = {
  [K in AlbumKey]: Album;
};

const TaylorSwiftQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showResult, setShowResult] = useState<Album | false>(false);
  const [answers, setAnswers] = useState<AlbumKey[][]>([]);

  // CSS classes remain the same
  const containerStyle = "min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 font-sans";
  const cardStyle = "max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-pink-200";
  const questionStyle = "text-2xl font-bold mb-6 text-purple-800";
  const buttonStyle = "w-full p-4 mb-3 text-left rounded-md bg-pink-50 hover:bg-pink-100 transition-colors border border-pink-200 font-medium text-purple-700 hover:border-purple-300";
  const progressStyle = "text-center text-purple-600 mt-4";
  const resultStyle = "text-center space-y-4";
  const titleStyle = "text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text";

  const questions: Question[] = [
    {
      question: "What's your ideal weekend activity?",
      options: [
        { text: "Writing in my journal", albums: ["torturedPoets", "folklore", "evermore"] },
        { text: "Dancing with friends", albums: ["nineteenEightyNine", "lover", "reputation"] },
        { text: "Quiet walk in nature", albums: ["debut", "fearless", "red"] },
        { text: "Creating art or music", albums: ["speakNow", "midnights", "folklore"] }
      ]
    },
    {
      question: "Pick a season:",
      options: [
        { text: "Summer", albums: ["nineteenEightyNine", "lover", "debut"] },
        { text: "Fall", albums: ["red", "evermore", "folklore"] },
        { text: "Winter", albums: ["torturedPoets", "midnights", "reputation"] },
        { text: "Spring", albums: ["fearless", "speakNow", "lover"] }
      ]
    },
    {
      question: "What's your preferred time of day?",
      options: [
        { text: "Dawn", albums: ["fearless", "debut", "lover"] },
        { text: "Midday", albums: ["nineteenEightyNine", "red", "speakNow"] },
        { text: "Dusk", albums: ["evermore", "folklore", "torturedPoets"] },
        { text: "Midnight", albums: ["midnights", "reputation", "evermore"] }
      ]
    },
    {
      question: "Choose your ideal setting for writing:",
      options: [
        { text: "Cozy cottage in the woods", albums: ["folklore", "evermore", "red"] },
        { text: "City rooftop at sunset", albums: ["nineteenEightyNine", "lover", "midnights"] },
        { text: "Vintage library", albums: ["torturedPoets", "speakNow", "evermore"] },
        { text: "Garden in bloom", albums: ["debut", "fearless", "lover"] }
      ]
    },
    {
      question: "Pick a literary genre:",
      options: [
        { text: "Gothic romance", albums: ["evermore", "reputation", "torturedPoets"] },
        { text: "Modern poetry", albums: ["folklore", "midnights", "torturedPoets"] },
        { text: "Classic fairytales", albums: ["fearless", "debut", "lover"] },
        { text: "Contemporary fiction", albums: ["red", "nineteenEightyNine", "speakNow"] }
      ]
    },
    {
      question: "What draws your attention first?",
      options: [
        { text: "The story behind things", albums: ["folklore", "evermore", "torturedPoets"] },
        { text: "The aesthetic beauty", albums: ["lover", "nineteenEightyNine", "red"] },
        { text: "The emotional depth", albums: ["speakNow", "midnights", "reputation"] },
        { text: "The hidden meanings", albums: ["evermore", "folklore", "midnights"] }
      ]
    },
    {
      question: "Choose a creative pursuit:",
      options: [
        { text: "Poetry writing", albums: ["torturedPoets", "evermore", "folklore"] },
        { text: "Photography", albums: ["nineteenEightyNine", "red", "lover"] },
        { text: "Playing music", albums: ["debut", "fearless", "speakNow"] },
        { text: "Painting", albums: ["evermore", "folklore", "midnights"] }
      ]
    },
    {
      question: "What's your comfort drink?",
      options: [
        { text: "Hot tea with honey", albums: ["folklore", "evermore", "debut"] },
        { text: "Champagne", albums: ["nineteenEightyNine", "lover", "midnights"] },
        { text: "Black coffee", albums: ["reputation", "torturedPoets", "red"] },
        { text: "Herbal infusion", albums: ["speakNow", "fearless", "evermore"] }
      ]
    },
    {
      question: "Pick a conversation topic:",
      options: [
        { text: "Life's great mysteries", albums: ["evermore", "folklore", "midnights"] },
        { text: "Past relationships", albums: ["red", "reputation", "torturedPoets"] },
        { text: "Future dreams", albums: ["fearless", "lover", "nineteenEightyNine"] },
        { text: "Childhood memories", albums: ["debut", "speakNow", "evermore"] }
      ]
    },
    {
      question: "Choose your ideal ending:",
      options: [
        { text: "Bittersweet but meaningful", albums: ["evermore", "folklore", "torturedPoets"] },
        { text: "Happy ever after", albums: ["lover", "fearless", "debut"] },
        { text: "Plot twist", albums: ["reputation", "midnights", "red"] },
        { text: "Open to interpretation", albums: ["folklore", "evermore", "speakNow"] }
      ]
    }
  ];

  const albums: Albums = {
    debut: {
      title: "Taylor Swift (Debut)",
      description: "You're sweet, nostalgic, and have a country heart. You value innocence and first experiences, finding beauty in life's simple moments.",
      score: 0
    },
    fearless: {
      title: "Fearless",
      description: "You're romantic, optimistic, and believe in fairy tales while staying grounded. You see the magic in everyday life.",
      score: 0
    },
    speakNow: {
      title: "Speak Now",
      description: "You're independent, strong-willed, and aren't afraid to speak your mind. Your creativity flows best when you're being completely authentic.",
      score: 0
    },
    red: {
      title: "Red",
      description: "You feel emotions intensely and appreciate both the highs and lows of life. You're passionate and embrace life's complexities.",
      score: 0
    },
    nineteenEightyNine: {
      title: "1989",
      description: "You're confident, fun-loving, and ready to shake off the negativity. You embrace change and love a good dance party.",
      score: 0
    },
    reputation: {
      title: "Reputation",
      description: "You're resilient, edgy, and don't care what others think. You know your worth and aren't afraid to show your darker side.",
      score: 0
    },
    lover: {
      title: "Lover",
      description: "You're romantic, colorful, and embrace all forms of love. You see the world through rose-colored glasses and celebrate the good times.",
      score: 0
    },
    folklore: {
      title: "Folklore",
      description: "You're introspective, creative, and appreciate storytelling. You find beauty in melancholy and quiet moments of reflection.",
      score: 0
    },
    evermore: {
      title: "Evermore",
      description: "You're mysterious, complex, and drawn to the darker side of fairy tales. You find comfort in autumn leaves and cozy spaces.",
      score: 0
    },
    midnights: {
      title: "Midnights",
      description: "You're reflective, nocturnal, and process your thoughts best at night. You're in touch with your deepest feelings and late-night thoughts.",
      score: 0
    },
    torturedPoets: {
      title: "The Tortured Poets Department",
      description: "You're poetic, introspective, and unafraid to explore the depths of emotion. You find beauty in life's most challenging moments and turn pain into art.",
      score: 0
    }
  };

  const handleAnswer = (selectedAlbums: AlbumKey[]): void => {
    setAnswers([...answers, selectedAlbums]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  // Updated calculateResult function with better type safety
  const calculateResult = (): void => {
    const albumScores = { ...albums };

    answers.flat().forEach((albumKey: AlbumKey) => {
      if (albumKey in albumScores) {
        albumScores[albumKey as keyof typeof albumScores].score += 1;
      }
    });

    const result = Object.values(albumScores).reduce((prev, current) => 
      (prev.score > current.score) ? prev : current
    );

    setShowResult(result);
  };

  return (
    <div className={containerStyle}>
      <div className="p-6">
        <div className={cardStyle}>
          <h1 className={titleStyle}>Which Taylor Swift Album Are You?</h1>

          {!showResult ? (
            <div>
              <div className="mb-8">
                <h2 className={questionStyle}>{questions[currentQuestion].question}</h2>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.albums)}
                      className={buttonStyle}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
              <div className={progressStyle}>
                <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
            </div>
          ) : (
            <div className={resultStyle}>
              <h2 className="text-3xl font-bold text-purple-800">You are...</h2>
              <h3 className="text-2xl font-semibold text-pink-600">{showResult.title}</h3>
              <p className="text-lg mb-8 text-purple-700">{showResult.description}</p>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setShowResult(false);
                  setAnswers([]);
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Take Quiz Again
              </button>
              <TipButton />
            </div>
          )}

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default TaylorSwiftQuiz;