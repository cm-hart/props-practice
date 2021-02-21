import Child from './Child'

const Parent = (props) => {
    return(
        <div>
            <p>Hi I am {props.name}</p>
            <Child name='Catie' color='Blue'/>
        </div>
    )
}

export default Parent;