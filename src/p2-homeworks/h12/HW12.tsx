import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeC, InitState} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType,InitState>(state => state.background.theme)

    let dispatch = useDispatch()
    // useDispatch, onChangeCallback

    let onChangeCallback = (value:InitState) => {
dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}


            <hr/>
        </div>
    );
}

export default HW12;
