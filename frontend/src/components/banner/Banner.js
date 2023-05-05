import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner mt-2">
      <div className="text-center text-white fs-3 fw-bold">Hızlı Teslimatla 2 Saatte Kapınızda!</div>
      <div className="text-center text-white">
        Seçtiğiniz Mavi'leriniz hızlı teslimat seçeneğiyle İstanbul, Ankara ve
        İzmir'de 2 saatte size teslim edilsin.
      </div>
      <div className="text-center mt-3">
        <a href="#" className="text-white fw-semibold">Hemen Başla</a>
      </div>
    </div>
  );
};

export default Banner;
