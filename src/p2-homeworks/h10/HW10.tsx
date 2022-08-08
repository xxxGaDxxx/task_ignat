import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import photo from '../../assets/img/loading/Lazy-Loader.svg'

function HW10() {

    let isolation = useSelector<AppStoreType, boolean>(state => state.loading.isolation)
    let dispatch = useDispatch()
    // useSelector, useDispatch
    /*const loading = false*/

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isolation
                ? (
                    <div><img src={photo} alt={''}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
