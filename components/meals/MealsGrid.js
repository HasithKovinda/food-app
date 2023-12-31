import MealItem from './MealItem'
import styles from './MealsGrid.module.css'


function MealsGrid({meals}) {
  return (
    <ul className={styles.meals}>
       {
         meals.map((meal)=>{
          return <li key={meal.id}>
            <MealItem {...meal} />
           </li>
         })
       }
    </ul>
  )
}

export default MealsGrid