const Card = ({ title, description, buttonText, icon, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg ${bgColor} text-white shadow-lg flex flex-col justify-between h-full`}>
      <div>
        {icon && <div className="text-3xl mb-2">{icon}</div>}
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
      </div>
      <button className="mt-4 bg-highlight py-2 px-4 rounded-lg self-start">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
