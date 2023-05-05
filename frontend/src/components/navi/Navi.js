import { Grid, InputAdornment, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import {
  MdOutlineShoppingBag,
  MdOutlineViewHeadline,
  MdSearch,
} from "react-icons/md";
import brandIcon from "../../assets/icons/mavi-logo-orijinal.png";
import "./navi.css";

const Navi = () => {
  useEffect(() => {
    const jean = document.getElementById("jeanLink");
    const jeanDiv = document.getElementById("jean");

    const kadin = document.getElementById("kadinLink");
    const kadinDiv = document.getElementById("kadin");

    const erkek = document.getElementById("erkekLink");
    const erkekDiv = document.getElementById("erkek");

    const cocuk = document.getElementById("cocukLink");
    const cocukDiv = document.getElementById("cocuk");

    const showJean = () => {
      jeanDiv.style.display = "flex";
    };

    const hideJean = () => {
      jeanDiv.style.display = "none";
    };

    const showKadin = () => {
      kadinDiv.style.display = "flex";
    };

    const hideKadin = () => {
      kadinDiv.style.display = "none";
    };

    const showErkek = () => {
      erkekDiv.style.display = "flex";
    };

    const hideErkek = () => {
      erkekDiv.style.display = "none";
    };

    const showCocuk = () => {
      cocukDiv.style.display = "flex";
    };

    const hideCocuk = () => {
      cocukDiv.style.display = "none";
    };

    jean.addEventListener("mouseover", showJean);
    jean.addEventListener("mouseout", hideJean);
    jeanDiv.addEventListener("mouseover", showJean);
    jeanDiv.addEventListener("mouseout", hideJean);

    kadin.addEventListener("mouseover", showKadin);
    kadin.addEventListener("mouseout", hideKadin);
    kadinDiv.addEventListener("mouseout", hideKadin);
    kadinDiv.addEventListener("mouseover", showKadin);

    erkek.addEventListener("mouseover", showErkek);
    erkek.addEventListener("mouseout", hideErkek);
    erkekDiv.addEventListener("mouseout", hideErkek);
    erkekDiv.addEventListener("mouseover", showErkek);

    cocuk.addEventListener("mouseover", showCocuk);
    cocuk.addEventListener("mouseout", hideCocuk);
    cocukDiv.addEventListener("mouseout", hideCocuk);
    cocukDiv.addEventListener("mouseover", showCocuk);
  });
  return (
    <div>
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        className="border navi"
      >
        <Grid xs={6} sm={4} md={4} lg={4} className="brandIcon-mobile-div">
          <img
            src={brandIcon}
            className="brandIcon-mobile"
            width={50}
            height={20}
          />
        </Grid>
        <Grid xs={4} sm={4} md={8} lg={8} className="navi-left">
          <Link href="/jeanguide" className="navi-link" id="jeanLink">
            Jean
          </Link>
          <Link href="#" className="navi-link" id="kadinLink">
            Kadın
          </Link>
          <Link href="#" className="navi-link" id="erkekLink">
            Erkek
          </Link>
          <Link href="#" className="navi-link" id="cocukLink">
            Çocuk
          </Link>
          <Link href="#" className="navi-link">
            Mavi All Blue
          </Link>
          <Link href="#" className="navi-link">
            Outlet
          </Link>
          <Link href="#" className="navi-link">
            Hediye Kartı
          </Link>
          <Link href="#" className="navi-link">
            Kartuş
          </Link>
        </Grid>

        <Grid xs={6} sm={8} md={8} lg={4} className="navi-right">
          <TextField
            // id="standard-search"
            label="Arama Yap"
            type="search"
            variant="standard"
            size="small"
            margin="dense"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Link href="#" className="nav-icon">
                    <MdSearch size={23} className="mb-1" />
                  </Link>
                </InputAdornment>
              ),
            }}
          />

          <Link href="#" className="nav-icon">
            <FaRegHeart />
          </Link>

          <Link href="#" className="nav-icon">
            <FaRegUser />
          </Link>

          <Link href="#" className="nav-icon">
            <MdOutlineShoppingBag size={20} />
          </Link>

          <Link href="#" className="nav-icon">
            <MdOutlineViewHeadline size={20} />
          </Link>
        </Grid>
      </Grid>

      {/* HOVER DIV MENU */}

      <div id="jean">
        <ul>
          <li>
            <Link className="fs-3">Kadın</Link>
          </li>
          <li>
            <Link className="fs-5">FİT</Link>
          </li>
          <li>
            <Link href="#">Tüm Jean'ler</Link>
          </li>
          <li>
            <Link href="#">Skinny</Link>
          </li>
          <li>
            <Link href="#">Flare-Bootcut / İspanyol Çizme</Link>
          </li>
          <li>
            <Link href="#">Boyfriend</Link>
          </li>
          <li>
            <Link href="#">Mom</Link>
          </li>
          <li>
            <Link href="#">Slim Straight / Düz Dar Kesim</Link>
          </li>
          <li>
            <Link href="#">Loose Straight / Düz Rahat Kesim</Link>
          </li>
          <li>
            <Link href="#">Wide Leg / Geniş Paça</Link>
          </li>
          <li>
            <Link href="#">Maternity / Hamile</Link>
          </li>
          <li>
            <Link href="#">Curvy, Büyük Beden</Link>
          </li>
          <li>
            <Link href="#" className="fw-bold">
              Senin Fit'in Hangisi?
            </Link>
          </li>
        </ul>

        <ul className="mt-5">
          <li>
            <Link className="fs-5">KOLEKSİYONLAR</Link>
          </li>
          <li>
            <Link href="#">Mavi All Blue</Link>
          </li>
          <li>
            <Link href="#">Mavi Premium Blue</Link>
          </li>
          <li>
            <Link href="#">Mavi Gold</Link>
          </li>
          <li>
            <Link href="#">Mavi Gold Shape</Link>
          </li>
          <li>
            <Link href="#">Mavi Icon</Link>
          </li>
          <li>
            <Link href="#">Mavi Move</Link>
          </li>

          <li className="mt-2">
            <Link className="fs-5">DİĞER JEAN'LER</Link>
          </li>

          <li>
            <Link href="#">Ceket</Link>
          </li>
          <li>
            <Link href="#">Gömlek</Link>
          </li>
          <li>
            <Link href="#">Etek</Link>
          </li>
          <li>
            <Link href="#">Elbise</Link>
          </li>
          <li>
            <Link href="#">Şort</Link>
          </li>
          <li>
            <Link href="#">Tulum</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-3">Erkek</Link>
          </li>
          <li>
            <Link className="fs-5">FİT</Link>
          </li>
          <li>
            <Link href="#">Tüm Jean'ler</Link>
          </li>
          <li>
            <Link href="#">Skinny</Link>
          </li>
          <li>
            <Link href="#">Tapered</Link>
          </li>
          <li>
            <Link href="#">Slim Straight / Düz Dar Kesim</Link>
          </li>
          <li>
            <Link href="#">Regular Straight / Düz Rahat Kesim</Link>
          </li>
          <li>
            <Link href="#">Loose</Link>
          </li>
          <li>
            <Link href="#">Comfort, Plus</Link>
          </li>
          <li>
            <Link href="#" className="fw-bold">
              Senin Fit'in Hangisi?
            </Link>
          </li>
        </ul>

        <ul className="mt-5">
          <li>
            <Link className="fs-5">KOLEKSİYONLAR</Link>
          </li>
          <li>
            <Link href="#">Mavi Pro</Link>
          </li>
          <li>
            <Link href="#">Mavi All Blue</Link>
          </li>
          <li>
            <Link href="#">Mavi Premium Blue</Link>
          </li>
          <li>
            <Link href="#">Mavi Black</Link>
          </li>
          <li>
            <Link href="#">Mavi Sporty</Link>
          </li>
          <li>
            <Link href="#">Mavi Pro Sport Repreve</Link>
          </li>
          <li>
            <Link href="#">Mavi Hemp Denim</Link>
          </li>
          <li>
            <Link href="#">MV91</Link>
          </li>

          <li className="mt-2">
            <Link className="fs-5">DİĞER JEAN'LER</Link>
          </li>
          <li>
            <Link href="#">Gömlek</Link>
          </li>
          <li>
            <Link href="#">Ceket</Link>
          </li>
          <li>
            <Link href="#">Şort</Link>
          </li>
        </ul>
      </div>

      <div id="kadin">
        <ul>
          <li>
            <Link className="fs-5">ÖNE ÇIKANLAR</Link>
          </li>
          <li>
            <Link href="#">Yeni Sezon</Link>
          </li>
          <li>
            <Link href="#">En Yeni</Link>
          </li>
          <li>
            <Link href="#">Mavi X S.E.M.T</Link>
          </li>
          <li>
            <Link href="#">Maviterranean</Link>
          </li>
          <li>
            <Link href="#">Natural Dye</Link>
          </li>
          <li>
            <Link href="#">Home Lux</Link>
          </li>
          <li>
            <Link href="#">Mavi Logo</Link>
          </li>
          <li>
            <Link href="#" className="fw-bold">
              Sadece Online'da
            </Link>
          </li>

          <li>
            <Link className="fs-5">KOLEKSİYONLAR</Link>
          </li>
          <li>
            <Link href="#">Mavi Teen</Link>
          </li>
          <li>
            <Link href="#">Mavi Youth</Link>
          </li>
          <li>
            <Link href="#">Mavi City</Link>
          </li>
          <li>
            <Link href="#">Mavi Casual</Link>
          </li>
          <li>
            <Link href="#">Mavi Pretty</Link>
          </li>
          <li>
            <Link href="#">Activewear</Link>
          </li>
          <li>
            <Link href="#">Mavi Lux Touch</Link>
          </li>
          <li>
            <Link href="#">Mavi All Blue</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="fs-5">JEAN</Link>
          </li>
          <li>
            <Link href="#">Tüm Jean'ler</Link>
          </li>
          <li>
            <Link href="#">Yeni Jean'ler</Link>
          </li>
          <li>
            <Link href="#">Gömlek</Link>
          </li>
          <li>
            <Link href="#">Ceket</Link>
          </li>
          <li>
            <Link href="#">Etek - Elbise</Link>
          </li>
          <li>
            <Link href="#">Şort</Link>
          </li>
          <li>
            <Link href="#">Tulum</Link>
          </li>
          <li>
            <Link href="#" className="fw-bold">
              Senin Fit'in Hangisi?
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="fs-5">GİYİM</Link>
          </li>
          <li>
            <Link href="#">Jean</Link>
          </li>
          <li>
            <Link href="#">Tshirt</Link>
          </li>
          <li>
            <Link href="#">Basic</Link>
          </li>
          <li>
            <Link href="#">Gömlek</Link>
          </li>
          <li>
            <Link href="#">Bluz - Top</Link>
          </li>
          <li>
            <Link href="#">Elbise - Etek</Link>
          </li>
          <li>
            <Link href="#">İkili Setler</Link>
          </li>
          <li>
            <Link href="#">Pantolon</Link>
          </li>
          <li>
            <Link href="#">Şort</Link>
          </li>
          <li>
            <Link href="#">Sweatshirt</Link>
          </li>
          <li>
            <Link href="#">Eşofman Altı</Link>
          </li>
          <li>
            <Link href="#">Mont - Kaban</Link>
          </li>
          <li>
            <Link href="#">Ceket - Yelek</Link>
          </li>
          <li>
            <Link href="#">Trençkot</Link>
          </li>
          <li>
            <Link href="#">Tayt</Link>
          </li>
          <li>
            <Link href="#">Triko - Kazak</Link>
          </li>
          <li>
            <Link href="#">Tüm Kadın Ürünleri</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-5">SPOR GİYİM</Link>
          </li>
          <li>
            <Link href="#">Spor Tshirt</Link>
          </li>
          <li>
            <Link href="#">Spor Tayt</Link>
          </li>
          <li>
            <Link href="#">Spor Şort</Link>
          </li>
          <li>
            <Link href="#">Spor Sütyeni</Link>
          </li>
          <li>
            <Link href="#">Spor Sweatshirt</Link>
          </li>
          <li>
            <Link href="#">Spor Eşofman Altı</Link>
          </li>
          <li>
            <Link href="#">Spor Rüzgarlık</Link>
          </li>
          <li>
            <Link href="#">Tüm Activewear Ürünleri</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-5">AKSESUAR</Link>
          </li>
          <li>
            <Link href="#">Çanta</Link>
          </li>
          <li>
            <Link href="#">Parfüm - Oje</Link>
          </li>
          <li>
            <Link href="#">Çorap</Link>
          </li>
          <li>
            <Link href="#">Plaj</Link>
          </li>
          <li>
            <Link href="#">Şapka</Link>
          </li>
          <li>
            <Link href="#">Bandana</Link>
          </li>
          <li>
            <Link href="#">Takı</Link>
          </li>
          <li>
            <Link href="#">Kemer</Link>
          </li>
          <li>
            <Link href="#">Şal</Link>
          </li>
          <li>
            <Link href="#">Saç Aksesuarları</Link>
          </li>
          <li>
            <Link href="#">Telefon Askısı</Link>
          </li>
          <li>
            <Link href="#">Cüzdan</Link>
          </li>
          <li>
            <Link href="#">Anahtarlık</Link>
          </li>
          <li>
            <Link href="#">Tüm Aksesuarlar</Link>
          </li>
        </ul>
      </div>

      <div id="erkek">
        <ul>
          <li>
            <Link className="fs-5">ÖNE ÇIKANLAR</Link>
          </li>
          <li>
            <Link href="#">Yeni Sezon</Link>
          </li>
          <li>
            <Link href="#">En Yeni</Link>
          </li>
          <li>
            <Link href="#">Mavi X S.E.M.T</Link>
          </li>
          <li>
            <Link href="#">Maviterranean</Link>
          </li>
          <li>
            <Link href="#">Natural Dye</Link>
          </li>
          <li>
            <Link href="#">Mavi Logo</Link>
          </li>
          <li>
            <Link href="#">Mavi Black</Link>
          </li>
          <li>
            <Link href="#" className="fw-bold">
              Sadece Online'da
            </Link>
          </li>

          <li>
            <Link className="fs-5">KOLEKSİYONLAR</Link>
          </li>
          <li>
            <Link href="#">Mavi Youth</Link>
          </li>
          <li>
            <Link href="#">Mavi Smart</Link>
          </li>
          <li>
            <Link href="#">Mavi Casual</Link>
          </li>
          <li>
            <Link href="#">Mavi Pro</Link>
          </li>
          <li>
            <Link href="#">Activewear</Link>
          </li>
          <li>
            <Link href="#">Lisanslı Ürünler</Link>
          </li>
          <li>
            <Link href="#">Mavi Lux Touch</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-5">JEAN</Link>
          </li>
          <li>
            <Link href="#">Tüm Jean'ler</Link>
          </li>
          <li>
            <Link href="#">Yeni Jean'ler</Link>
          </li>
          <li>
            <Link href="#">Gömlek</Link>
          </li>
          <li>
            <Link href="#">Ceket</Link>
          </li>
          <li>
            <Link href="#">Şort</Link>
          </li>
          <li>
            <Link href="#" className="fw-bold">
              Senin Fit'in Hangisi?
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-5">GİYİM</Link>
          </li>
          <li>
            <Link href="#">Jean</Link>
          </li>
          <li>
            <Link href="#">Gömlek</Link>
          </li>
          <li>
            <Link href="#">Polo</Link>
          </li>
          <li>
            <Link href="#">Tshirt</Link>
          </li>
          <li>
            <Link href="#">Basic</Link>
          </li>
          <li>
            <Link href="#">Pantolon</Link>
          </li>
          <li>
            <Link href="#">Şort</Link>
          </li>
          <li>
            <Link href="#">Overshirt</Link>
          </li>
          <li>
            <Link href="#">Sweatshirt</Link>
          </li>
          <li>
            <Link href="#">Eşofman Altı</Link>
          </li>
          <li>
            <Link href="#">Triko - Kazak</Link>
          </li>
          <li>
            <Link href="#">Mont - Kaban</Link>
          </li>
          <li>
            <Link href="#">Ceket</Link>
          </li>
          <li>
            <Link href="#">Yelek</Link>
          </li>
          <li>
            <Link href="#">Tüm Erkek Ürünleri</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-5">SPOR GİYİM</Link>
          </li>
          <li>
            <Link href="#">Spor Tshirt</Link>
          </li>
          <li>
            <Link href="#">Spor Şort</Link>
          </li>
          <li>
            <Link href="#">Spor Sweatshirt</Link>
          </li>
          <li>
            <Link href="#">Spor Eşofman Altı</Link>
          </li>
          <li>
            <Link href="#">Tüm Activewear Ürünleri</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-5">AKSESUAR</Link>
          </li>
          <li>
            <Link href="#">Parfüm</Link>
          </li>
          <li>
            <Link href="#">Boxer</Link>
          </li>
          <li>
            <Link href="#">Çorap</Link>
          </li>
          <li>
            <Link href="#">Çanta</Link>
          </li>
          <li>
            <Link href="#">Deniz Şortu</Link>
          </li>
          <li>
            <Link href="#">Kemer</Link>
          </li>
          <li>
            <Link href="#">Cüzdan</Link>
          </li>
          <li>
            <Link href="#">Şapka</Link>
          </li>
          <li>
            <Link href="#">Kolye</Link>
          </li>
          <li>
            <Link href="#">Bileklik</Link>
          </li>
          <li>
            <Link href="#">Tüm Aksesuarlar</Link>
          </li>
        </ul>
      </div>

      <div id="cocuk">
        <ul>
          <li>
            <Link className="fs-5">KOLEKSİYONLAR</Link>
          </li>
          <li>
            <Link href="#">Lisanslı Ürünler</Link>
          </li>
          <li>
            <Link href="#">Mavi Logo</Link>
          </li>
          <li>
            <Link href="#" className="fw-bold">Sadece Online'da</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-5">KIZ ÇOCUK</Link>
          </li>
          <li>
            <Link href="#">Jean</Link>
          </li>
          <li>
            <Link href="#">Tshirt</Link>
          </li>
          <li>
            <Link href="#">Sweatshirt</Link>
          </li>
          <li>
            <Link href="#">Eşofman Altı</Link>
          </li>
          <li>
            <Link href="#">Tayt</Link>
          </li>
          <li>
            <Link href="#">Tüm Kız Çocuk Ürünleri</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="fs-5">ERKEK ÇOCUK</Link>
          </li>
          <li>
            <Link href="#">Jean</Link>
          </li>
          <li>
            <Link href="#">Tshirt</Link>
          </li>
          <li>
            <Link href="#">Sweatshirt</Link>
          </li>
          <li>
            <Link href="#">Eşofman Altı</Link>
          </li>
          <li>
            <Link href="#">Tüm Erkek Çocuk Ürünleri</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navi;
