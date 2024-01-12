import React from "react";
import { IonIcon } from "@ionic/react";
import {
  logoInstagram,
  logoFacebook,
  logoYoutube,
  logoWhatsapp,
} from "ionicons/icons";
import { BoxInsta, BoxFacebook, BoxYoutube, BoxWhats } from "./ContactStyles";

export const Contact: React.FC = () => {
  return (
    <>
      <BoxInsta>
        <IonIcon icon={logoInstagram} className="icon instagram" />
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <p>Instagram</p>
        </a>
      </BoxInsta>

      <BoxFacebook>
        <IonIcon icon={logoFacebook} className="icon facebook" />
        <a
          href="https://www.facebook.com/login/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Facebook</p>
        </a>
      </BoxFacebook>

      <BoxYoutube>
        <IonIcon icon={logoYoutube} className="icon youtube" />
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <p>YouTube</p>
        </a>
      </BoxYoutube>

      <BoxWhats>
        <IonIcon icon={logoWhatsapp} className="icon whatsapp" />
        <a href="https://wa.me/5511948490988" target="_blank" rel="noreferrer">
          <p>WhatsApp</p>
        </a>
      </BoxWhats>
    </>
  );
};
