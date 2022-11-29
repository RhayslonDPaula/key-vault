import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { getGamemode } from "../../../global";
import lgCardStyles from "../../../scss/modules/pages/game/LanguageGamemodeCard.module.scss"
import LanguageSupport from "../../ui/LanguageSupport";

export default function LanguageGamemodeCard({ gamemodeName, languageSupport }) {
  if (!gamemodeName || !languageSupport) return;
  return (
    <div className={`${lgCardStyles.container}`}>
      <div className={`${lgCardStyles["gamemode-container"]}`}>
        <h3>Modos de Jogo</h3>
        {gamemodeName.map((name, index) => {
          return <p>{getGamemode(name)}</p>;
        })}
      </div>
      <LanguageSupport title={"Idiomas"} languageSupport={languageSupport} />
    </div>
  );
}
