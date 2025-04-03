const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-end p-4 bg-darkBg text-textPrimary shadow-md z-10">
      <div className="flex gap-4">
        <span className="text-highlight">💎 4</span>
        <span className="text-accent">🔮 1</span>
      </div>
    </div>
  );
};

export default TopBar;

