import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import ContextLayout from './Context';
import { Suspense } from 'react';
import { Loading } from './components/Loading';
import withClearCache from './ClearCache';
import { NotFound } from './components/NotFound';
import { history } from './utils';
import { Home } from './components/Home';
import { LayoutFrontend } from './components/layout';
import { Login } from './components/Login';
import { RecoverAccount } from './components/RecoverAccount';
import { AboutUs } from './components/AboutUs';
import { Help } from './components/Help';
import { PQR } from './components/PQR';

function App() {
    return (<div> <BrowserRouter>
        <Router history={history}>
            <Switch>
                <Route>
                    <ContextLayout.Consumer>
                        {
                            ({ error }) => <LayoutFrontend error={error}>
                                <Suspense fallback={<Loading />} >
                                    <Switch>
                                        <Route exact path='/' component={Home} />
                                        <Route exact path='/login' component={Login} />
                                        <Route exact path='/recover-account' component={RecoverAccount} />
                                        <Route exact path='/quienes-somos' component={AboutUs} />
                                        <Route exact path='/help' component={Help} />
                                        <Route exact path='/preguntas-frecuentes' component={PQR} />
                                        <Route component={NotFound} />
                                    </Switch>
                                </Suspense>
                            </LayoutFrontend>
                        }
                    </ContextLayout.Consumer>
                </Route>
            </Switch>
        </Router>
    </BrowserRouter>

    </div>
    )

}

const ClearCacheComponent = withClearCache(App)

export default () => <ClearCacheComponent />