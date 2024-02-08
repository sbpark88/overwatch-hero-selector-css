import "reset-css/sass/_reset.scss";
import "./style/style.scss";
import Hero from "./component/Hero";
import { $, render } from "./js/render";

const HERO_COUNT = 32;

const heroesContainer = $(".heroes");
const heroes = Array.from({ length: HERO_COUNT }, Hero);

render(heroesContainer)(heroes);
