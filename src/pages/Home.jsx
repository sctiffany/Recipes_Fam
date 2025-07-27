import { OptionMenu } from "../components/OptionMenu";

export function Home() {
  return (
    <div>
      <h1 className="main-title">Une petite faim ?</h1>
      <div className="option-menu-container">
        <OptionMenu link="/ajouter-recette" title={"Ajouter une recette"} />
        <OptionMenu link="/voir-recettes" title={"Voir toutes les recettes"} />
        <OptionMenu link="/faire-menu" title={"Faire le menu"} />
      </div>
    </div>
  );
}
