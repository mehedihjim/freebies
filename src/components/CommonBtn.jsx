const CommonBtn = ({ text }) => {
  return (
    <div>
      <button className="py-[13px] px-[45px] border font-medium text-primary border-primary rounded-[50px] hover:bg-primary hover:text-white duration-300">
        {text}
      </button>
    </div>
  );
};

export default CommonBtn;
