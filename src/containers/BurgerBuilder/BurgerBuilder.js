import React, {Component} from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Moda";
import BuildSummary from "../../components/Burger/BuildSummary/BuildSummary";

const prices = {
    salad: .4,
    cheese: .6,
    bacon: 1,
    meat: 1.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        burgerPrice: 4,
        purchaseAble: false,
        showModal: false,
    }

    purchaseAbleUpdateState = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients).map((igkey) => {
            return updatedIngredients[igkey];
        }).reduce((pval, cval) => {
            return pval + cval;
        }, 0);

        if (sum) {
            this.setState({purchaseAble: true})
        } else {
            this.setState({purchaseAble: false})
        }
    }

    addIngredientHandler = (type) => {
        const count = this.state.ingredients[type];
        const updatedCount = count + 1;

        const ingredientPrice = prices[type];
        const newBurgerPrice = ingredientPrice + this.state.burgerPrice;

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            burgerPrice: newBurgerPrice
        })

        this.purchaseAbleUpdateState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        // const count = this.state.ingredients[type];
        // const updatedCount = count - 1;

        if (this.state.ingredients[type] !== 0) {
            const ingredientPrice = prices[type];
            const newBurgerPrice = this.state.burgerPrice - ingredientPrice;

            const updatedIngredients = {
                ...this.state.ingredients
            };

            updatedIngredients[type] = updatedIngredients[type] - 1;

            this.setState({
                ingredients: updatedIngredients,
                burgerPrice: newBurgerPrice
            })
            this.purchaseAbleUpdateState(updatedIngredients);
        }
    }

    modalHandler = () => {
        this.setState({
            showModal: true,
        })
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients,
        }

        for (const key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] === 0);
        }

        return (
            <Auxiliary>
                <Modal showModal = {this.state.showModal} ingredients={this.state.ingredients}>
                    <BuildSummary ingredients={this.state.ingredients}/>
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <BuildControls burgerPrice={this.state.burgerPrice.toFixed(2)} disabledInfo={disabledInfo}
                               ingredientRemoved={this.removeIngredientHandler}
                               ingredientAdded={this.addIngredientHandler}
                               purchaseAble={this.state.purchaseAble}
                               modalHandler={this.modalHandler}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;