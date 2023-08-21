import "../css/Login.css" ; 

function Register() {
    
    return(
        <>
            <div className="page-login">
                <div class="form-wrapper">
                    <h2>Sign Up</h2>
                    <form action="#">
                        <div class="form-control">
                            <input type="text" defaultValue={""} required/>
                            <label>Email or phone number</label>
                        </div>
                        <div class="form-control">
                            <input type="text" defaultValue={""} required/>
                            <label>Name</label>
                        </div>
                        <div class="form-control">
                            <input type="password" defaultValue={""} required/>
                            <label>Password</label>
                        </div>
                        <div class="form-control">
                            <input type="password" defaultValue={""} required/>
                            <label>Re Password</label>
                        </div>
                        <button type="submit">Sign In</button>
                        <div class="form-help"> 
                        
                            <a href="#">Need help?</a>
                        </div>
                    </form>
                    
                </div>
            </div>

        </>
    )
}

export default Register ; 