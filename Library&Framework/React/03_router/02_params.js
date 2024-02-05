
// params to get the dynamic url based on the data and username

// url format -> /user/:id
// id is dynamic route created based on the data.

import {useParams} from 'react-router-com'

function User(){
    const {id} = useParams()
    return(
        // do complex tasks and return 
        <div>User: {id}</div>
    )
}

