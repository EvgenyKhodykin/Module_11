import React from 'react'
import PropsTypes from 'prop-types'
import CollapseWrapper from '../common/collapse'

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title='Упражнение'>
            <p className='mt-3'>
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{' '}
                <code>React.Children.map</code> так и{' '}
                <code>React.Children.toArray</code>
            </p>
            <ComponentWrapper>
                <Component />
                <Component />
                <Component />
            </ComponentWrapper>
        </CollapseWrapper>
    )
}

const Component = () => {
    return <div>Компонент списка</div>
}

const ComponentWrapper = ({ children }) => {
    return React.Children.map(children, (child, index) => (
        <div style={{ display: 'flex' }}>
            <div>{child}</div> &nbsp; <div>{index + 1}</div>
        </div>
    ))
}

ComponentWrapper.propTypes = {
    children: PropsTypes.oneOfType([
        PropsTypes.arrayOf(PropsTypes.node),
        PropsTypes.node
    ])
}

export default ChildrenExercise
