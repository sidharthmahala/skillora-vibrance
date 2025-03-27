
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-skillora-dark text-white p-6">
      <div className="max-w-md w-full text-center relative">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-skillora-blue/20 filter blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-skillora-pink/20 filter blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-skillora-blue to-skillora-pink bg-clip-text text-transparent mb-6">
            404
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Oops! Looks like you've ventured into uncharted territory.
          </p>
          <button
            onClick={() => navigate("/")}
            className="btn-glow flex items-center justify-center mx-auto"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
