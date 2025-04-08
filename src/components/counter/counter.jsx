export const Counter = ({count, increment, decrement}) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}