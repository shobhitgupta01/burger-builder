import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}

];

const buildControls = (props) => {
    const controlComponents = controls.map((control) => {
        return (
            <BuildControl
                key={control.label}
                label={control.label}
                add={() => props.addIngredient(control.type)}
                remove={() => props.removeIngredient(control.type)}
                disabled={props.disabled[control.type]}
            />
        );

    });
    return (
        <div className={styles.BuildControls}>
            <p> The total price is <strong>{props.price.toFixed(2)}</strong></p>
            {controlComponents}
        </div>
    );
}

export default buildControls;