import React from 'react';
import classes from './MealsSummery.module.css';

const MealsSummery = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our board section od available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just in time and
                of course by experience chef!!
            </p>
        </section>
    );
}

export default MealsSummery;