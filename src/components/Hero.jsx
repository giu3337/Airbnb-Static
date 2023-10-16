export const Hero = () => {
  return (
    <section>
      <div 
        className="w-full h-56  mx-auto mt-8
        flex max-w-3xl px-10">

       <div className="w-1/5 flex items-center">
            <img src="image28.png" alt="Cooking Photo" className="mx-auto" />
       </div>

       <div className="w-1/5 flex items-start">
            <div className="mx-auto">
                <img src="image30.png" alt="Woman Smiling"/>
                <img src="image26.png" alt="Dancing" />
            </div>
       </div>

       <div className="w-1/5 flex items-end">
            <div className="mx-auto">
                <img src="image27.png" alt="food" />
                <img src="image29.png" alt="Guitar" />
            </div>
       </div>

       <div className="w-1/5 flex items-start">
            <div className="mx-auto">
                <img src="image22.png" alt="music" />
                <img src="image23.png" alt="pool" />
            </div>
       </div>

       <div className="w-1/5 flex items-center">
            <div className="mx-auto">
                <img src="image25.png" alt="yoga" />
                <img src="image24.png" alt="sing" />
            </div>
       </div>
      </div>


      <div className="px-7 pt-8 md:text-center" >
        <h1 className="text-4xl font-semibold mb-4">Online Experiences</h1>
        <p className="font-light">
          Join unique interactive activities led by <br /> one-of-a-kind hosts—all
          without leaving  <br /> home.
        </p>
      </div>
    </section>
  );
};
