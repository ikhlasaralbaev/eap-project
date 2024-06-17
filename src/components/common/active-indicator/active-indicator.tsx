const ActiveIndicator = () => {
  return (
    <div className="flex h-6 w-6 items-center justify-center">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
      </span>
    </div>
  );
};

export default ActiveIndicator;
