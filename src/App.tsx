import React from 'react';
import { MainRouter } from './routers/router';
import {RecoilRoot, atom, selector, useRecoilState,  useRecoilValue } from 'recoil';


const App = () => {
    return (
        <RecoilRoot>
            <MainRouter/>
        </RecoilRoot>
    )
}

export default App;


