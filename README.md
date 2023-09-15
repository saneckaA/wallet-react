# Wallet - React

## Description
The wallet application allows you to manage your expenses. The application is divided into two panels. In the first one, transactions divided into income and expenses are shown in the form of a list of transactions. A single transaction consists of a category icon, the name of the transaction, and the amount assigned to it. At the very bottom is a summary of the amounts of all transactions marked with the Total field. In addition, on the right side of each transaction, there is a button marked with an 'x' that allows you to delete a single transaction. After clicking on the transaction name, you will be redirected to the page with information about that transaction such as name, amount, category, type of transaction, and date when the transaction was added. The second panel consists of a summary of income and expenses. In addition, under this sum, an add transactions button takes us to a subpage where we can complete the information in the form about the transaction we want to add. In this form, it's required to enter the name of the transaction and its amount, as well as select the category to which the transaction belongs. There are five categories to choose from: Food, Shopping, Transportation, Cinema and Income. When you want to add a transaction to expenses, put a minus sign in front of the amount. To save the transaction, click on the 'Zapisz' button and when you want to return to the main page, click on the 'Powrót' button. In the second panel of the application, there is also a button that allows you to delete all added transactions at once. At the very top of this panel, there is also a clock and a button that allows you to change between light and dark mode. 

## How it works:
![](https://github.com/saneckaA/wallet-react/blob/main/public/Wallet-animation1.2.gif?raw=true)
## You can check it out here:
[Wallet - demo](https://saneckaa.github.io/wallet-react/)
## Technologies used in this project:
- HTML
- CSS
- JavaScript (ES6+)
- React
- create-react-app
- custom hooks
- React-redux
- React-router
- Redux-saga
- styled-components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
