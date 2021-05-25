import React from "react";
import "./styles.css";
export default class ImageComponent extends React.Component {
    state = { isOpen: true };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };

    render() {
        return ( <
            div >
            <
            img className = "small"
            src = "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg"
            onClick = { this.handleShowDialog }
            alt = "no image" /
            > {
                this.state.isOpen && ( <
                    dialog className = "dialog"
                    style = {
                        { position: "absolute" }
                    }
                    open onClick = { this.handleShowDialog } >
                    <
                    img className = "image"
                    //src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fboutique-window-fashion-clothing-store-fashion-store-window-shopping-mall-dress-shop-window-taken-night-46821754.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fstock-photo-boutique-window-fashion-clothing-store-fashion-store-window-shopping-mall-dress-shop-window-taken-night-image46821754&tbnid=XiI0vBZ1IrBfWM&vet=12ahUKEwi85f79tuLwAhVZxHMBHfSkCUAQMygZegUIARCMAg..i&docid=xearomIColOvFM&w=1300&h=958&q=shop%20images&hl=en&ved=2ahUKEwi85f79tuLwAhVZxHMBHfSkCUAQMygZegUIARCMAg"
                    onClick = { this.handleShowDialog }
                    alt = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fboutique-window-fashion-clothing-store-fashion-store-window-shopping-mall-dress-shop-window-taken-night-46821754.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fstock-photo-boutique-window-fashion-clothing-store-fashion-store-window-shopping-mall-dress-shop-window-taken-night-image46821754&tbnid=XiI0vBZ1IrBfWM&vet=12ahUKEwi85f79tuLwAhVZxHMBHfSkCUAQMygZegUIARCMAg..i&docid=xearomIColOvFM&w=1300&h=958&q=shop%20images&hl=en&ved=2ahUKEwi85f79tuLwAhVZxHMBHfSkCUAQMygZegUIARCMAg" /
                    > < /
                    dialog >
                )
            } <
            /div>
        );
    }
}