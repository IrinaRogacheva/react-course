import {createPortal} from "react-dom";
import {useState} from "react";

export const Modal = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    return <>
        <button onClick={() => setIsVisible(!isVisible)}>close</button>
        {isVisible &&
            createPortal(<div>{children}</div>, document.getElementById("modal"))
        }
    </>;
}