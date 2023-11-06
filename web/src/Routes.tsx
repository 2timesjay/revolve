// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Items" titleTo="items" buttonLabel="New Item" buttonTo="newItem">
        <Route path="/items/new" page={ItemNewItemPage} name="newItem" />
        <Route path="/items/{id:Int}/edit" page={ItemEditItemPage} name="editItem" />
        <Route path="/items/{id:Int}" page={ItemItemPage} name="item" />
        <Route path="/items" page={ItemItemsPage} name="items" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Budgets" titleTo="budgets" buttonLabel="New Budget" buttonTo="newBudget">
        <Route path="/budgets/new" page={BudgetNewBudgetPage} name="newBudget" />
        <Route path="/budgets/{id:Int}/edit" page={BudgetEditBudgetPage} name="editBudget" />
        <Route path="/budgets/{id:Int}" page={BudgetBudgetPage} name="budget" />
        <Route path="/budgets" page={BudgetBudgetsPage} name="budgets" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
