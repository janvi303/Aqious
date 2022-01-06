import React from "react";
function MaskGroup() {
  return (
    <>
      <div className="maskgrpimg ">
        <div className="text-center ">
          <div className="maskfont" data-aos="fade-right">
            <h1>
              Try Hosting
            </h1>
            <h6 data-aos="fade-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </h6>
            <details>
              <summary>
                <span  className="maskbtn" id="open">Read More</span>
                <span id="close">Less</span>
              </summary>
            
              <p className="maskbtnOpenText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaskGroup;
