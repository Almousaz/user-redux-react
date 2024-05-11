
import { useSelector } from "react-redux"

export const Contact = () => {
    const selector = useSelector((state) => state.user)

    return(
        <div><h1>Contact {selector.username}</h1></div>
    )
}

