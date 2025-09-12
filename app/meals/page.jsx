import Link from "next/link";
import classes from "./page.module.css";
import MelasGrid from "@/components/meals/melas-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
    title: "All meals",
  description: "brows the delisious meals.",
}
async function Meals() {
  const meals = await getMeals();
  return <MelasGrid meals={meals} />;
}
export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose youtfavorite recipe and cook it yourself ,. it is so easy</p>
        <p className={classes.cta}>
          <Link href={"/meals/shere"}>Shere your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals ...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
