//Intro

class OrderManager {
    constructor() {
        this.orders = []
    }

    placeOrder(order, id) {
        this.orders.push(id)
        return `You have successfully ordered ${order} (${id})`;
    }

    trackOrder(id) {
        return `Your order ${id} will arrive in 20 minutes.`
    }

    cancelOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id)
        return `You have canceled your order ${id}`
    }
}


const manager = new OrderManager();

manager.placeOrder("Pad Thai", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");

// However, there are downsides to invoking the methods directly on the manager instance. It could happen that we decide to rename certain methods later on, or the functionality of the methods change.

// Say that instead of calling it placeOrder, we now rename it to addOrder! This would mean that we would have to make sure that we don’t call the placeOrder method anywhere in our codebase, which could be very tricky in larger applications. Instead, we want to decouple the methods from the manager object, and create separate command functions for each command!

// Let’s refactor the OrderManager class: instead of having the placeOrder, cancelOrder and trackOrder methods, it will have one single method: execute. This method will execute any command it’s given.

// Each command should have access to the orders of the manager, which we’ll pass as its first argument.

