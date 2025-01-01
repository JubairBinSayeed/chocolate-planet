const Banner = () => {
    return (
      <div className="overflow-hidden w-full h-[200px] relative">
        <div className="flex animate-marquee">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TMTDEljbfzZmeiiu2lWUbWdSCQsh2xXkXw&s"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplvoLSDlziWTWfax8miV-sAMJsbHBz11zvw&s"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TbPWYNvwCm2KqavPo0Ij7PxFdLJ4n0mxLw&s"
            alt=""
          />
        </div>
      </div>
    );
  };
  
  export default Banner;
  