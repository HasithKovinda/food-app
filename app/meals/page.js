import Link from "next/link"
import styles from './page.module.css';
import { getMeals } from "@/API/meals";
import MealsGrid from "@/components/meals/MealsGrid";
import { Suspense } from "react";

async function Meals(){
  const meals = await getMeals()
  return <MealsGrid meals={meals} />

}

async function page() {
  return (
    <>
     <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching Meals....</p>}>
          <Meals/>
        </Suspense>
      </main>
  </>
  )
}

export default page
