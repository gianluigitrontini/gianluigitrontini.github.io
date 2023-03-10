import React, { useEffect, useRef, useState } from "react";

import gbFlag from "../../assets/images/icons/en_flag.svg";
import itFlag from "../../assets/images/icons/it_flag.svg";
import esFlag from "../../assets/images/icons/es_flag.svg";

function LanguageSelector() {
  const [language, setLanguage] = useState("en");

  const getLanguage = () => {
    return language === "en" ? gbFlag : language === "es" ? esFlag : itFlag;
  };

  const langDropdown: any = useRef(null);

  useEffect(() => {
    langDropdown?.current?.addEventListener("change", (e: any) => {
      setLanguage(e.target.value);
      //   if (e.target.value !== "en") {
      //     if (
      //       window.location.pathname.indexOf("es") !== -1 ||
      //       window.location.pathname.indexOf("it") !== -1
      //     ) {
      //       window.location.pathname.replace(/^.{3}/g, e.target.value);
      //       window.location.pathname.reload();
      //       setLanguage(e.target.value);
      //       console.log(language);
      //     } else {
      //       window.location.pathname = e.target.value + window.location.pathname;
      //       window.location.pathname.reload();
      //     }
      //   } else {
      //     window.location.replace(window.location.origin);
      //   }
    });
  }, [language]);

  return (
    <>
      <img className="flag--en" src={getLanguage()} alt="United Kingdom Flag" />
      <select id="language-selector" ref={langDropdown} defaultValue="en">
        <option value="en" id="en">
          ENGLISH
        </option>
        <option value="es" id="es">
          ESPAÑOL
        </option>
        <option value="it" id="it">
          ITALIANO
        </option>
      </select>
    </>
  );
}

export default LanguageSelector;
