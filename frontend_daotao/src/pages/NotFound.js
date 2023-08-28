import {Link} from "react" ; 

import "../css/NotFound.css" ; 
import { URL_ } from "../config/constants";


function NotFound() {
    return(
        <div className="notfound-page">
            <div id="error-page">
                <div class="content">
                    <h2 class="header" data-text="404">
                    404
                    </h2>
                    <h4 data-text="Opps! Page not found">
                    Opps! Page not found
                    </h4>
                    <p>
                    Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                    </p>
                    <div class="btns">
                    <a href={URL_.HOME}>return home</a>
                    <a href={URL_.HOME}>report problem</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound ; 

