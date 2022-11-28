import Products from "../products/Products";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <div>
            <Switch>
                {/* Whenever we go to the path "/", Products items will be displayed on our screen */}
                <Route path="/" exact>
                    <Products />
                </Route>
            </Switch>
        </div>
    );
};
export default Routes;