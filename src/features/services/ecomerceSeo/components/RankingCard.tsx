const RankingCard = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 shadow-xl">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          <span className="text-sm text-gray-300">Live Rankings</span>
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((position) => (
            <div
              key={position}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <span className="font-mono">{position}.</span>
              <div className="h-2 bg-blue-500/20 rounded-full w-32"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingCard;