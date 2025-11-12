export const LoadingScreen = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary animate-pulse" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.1em' }}>
          NETFLIX
        </h1>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};
