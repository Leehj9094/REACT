import {Link, useNavigate,useParams} from 'react-router-dom';

const Contact = () => {
    const {name,age} = useParams();
    const navigate = useNavigate();
    const handlerHome = () =>{
        console.log("Home");
        navigate("/");
    }
    const handlerAbout = () =>{
        console.log("About");
        navigate("/about?name=Dong&age=99");
    }
    const handlerContact = () =>{
        console.log("Contact");
        navigate("contact");
    }
        return (
        <div>
             <nav>
                <ul>
                    <li> <button onClick={handlerHome}>HOME</button>    </li>
                    <li> <button onClick={handlerAbout}>ABOUT</button>   </li>                  
                    <li> <button onClick={handlerContact}>CONTACT</button> </li>
                </ul>
            </nav>
            <h1>CONTACT</h1>
            name : {name} , age : {age} <br/>
            <p>Welcome to the contact page!</p>
        </div>
    )
}

export default Contact;