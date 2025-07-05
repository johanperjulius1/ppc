import { Casino } from "@/types/types";
import classes from './toplist.module.css';
import OperatorContainer from '../feber/operator-container';

interface ToplistProps {
  casinos: Casino[];
  title?: string;
  subtitle?: string;
}

export default function Toplist({
  casinos,
  title,
  subtitle
}: ToplistProps) {

  const dateDay = new Date().getDate().toString();
  const dateMonth = new Date().toLocaleString('default', { month: 'long' });
  const dateYear = new Date().getFullYear();

  const defaultSubtitle = `Bonusarna uppdaterades den ${dateDay} ${dateMonth} ${dateYear}`;

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.headline}>{title}</h1>
      <h2 className={classes.subtitle}>
        {subtitle || defaultSubtitle}
      </h2>
      {casinos.map((casino) => (
        <OperatorContainer key={casino.title} casino={casino} />
      ))}
    </div>
  );
}
