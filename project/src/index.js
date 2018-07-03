import React from 'react';
import ReactDOM from 'react-dom';

render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                <main className='container'>
                    <Switch>
                        <Route path='/course' component={Home}/>
                        <Route path='/mycourse' component={Mycourse}/>
                        <Route path='/person' component={Person}/>
                        <Redirect to='/course'/>
                    </Switch>
                </main>

                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);