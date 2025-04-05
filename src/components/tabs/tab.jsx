export const Tab = ({id, currentId, name, onClick}) => {
    return (
        <>
            <button
                onClick={() => {
                    if (id !== currentId) {
                        onClick(id)
                    }
                }}
                style={(currentId === id) ? {background: "bisque"} : {}}
            >
                {name}
            </button>
        </>
    )
}