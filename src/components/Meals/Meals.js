import MealsSummery from './MealsSummery';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';

const Meals = (props) => {
    return (
        <Fragment>
            <MealsSummery/>
            <AvailableMeals/>
        </Fragment>
    );
}

export default Meals;