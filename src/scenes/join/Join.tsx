function Join() {
  return (
    //   md:ml-44 md:mt-12 md:absolute absolute
    <div className="bgDiv md:w-[66%] md:h-[120px] mx-auto h-[100px] sm:text-2xl md:text-3xl text-[#000] flex flex-col font-normal text-xl">
      <div className="w-[100%]">
        {/* w-600px */}
        <span className="flex flex-col md:flex-row items-center md:mt-11 justify-center md:justify-start md:mx-12 mt-6">
          {" "}
          JOIN OUR COMMUNITY RIGHT NOW!
        </span>

        {/* md:w-44  ml-52  my-2 md:h-14 w-28  */}
        <button className="flex flex-grow md:ml-[600px] md:-my-11 md:text-[20px] text-[12px] items-center justify-center mx-auto my-2 h-9 w-28 md:h-14 md:w-44 bg-[#F9F9F9] rounded-2xl text-[#F77A40] font-medium">Start Free Trial</button>
      </div>
    </div>
  );
}

export default Join;
