import { title } from "process"

export default function USER(){
    return(
        <div>
            <h1>
                users page
            </h1>
        </div>
    )
}

export function generateMetadata(){
    return{
        title : "user page meta data",
        description:" users page description"
    }
}