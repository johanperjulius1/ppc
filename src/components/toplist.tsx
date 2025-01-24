import { casinosByRating } from "@/lib/casinos-data";
import classes from './toplist.module.css';
import OperatorContainer from './feber/operator-container';

export default function Toplist() {
  
  const dateDay = new Date().getDate().toString();
  const dateMonth = new Date().toLocaleString('default', { month: 'long' });
  const dateYear = new Date().getFullYear();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.headline}>Topp 10 bästa online casinon</h1>
      <h2 className={classes.subtitle}>
        Bonusarna uppdaterades den {dateDay} {dateMonth} {dateYear}
      </h2>
      {casinosByRating.map((casino) => (
        <OperatorContainer key={casino.title} casino={casino} />
      ))}
    </div>
  );
}
