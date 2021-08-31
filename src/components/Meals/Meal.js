import {Fragment} from 'react'
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
const Meal = props => {
  return (
    <Fragment>
      <AvailableMeals/>
      <MealsSummary/>
    </Fragment>
  )
}

export default Meal;
