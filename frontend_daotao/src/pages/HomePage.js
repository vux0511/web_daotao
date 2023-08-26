import HeaderNav from "../components/HeaderNav";
import "../css/HomePage.css";
import ListCardCourse from "../components/ListCardCourse";
function Home() {
    return (
        <>
            <section className="home-section fullWidth">
                    <HeaderNav></HeaderNav>
                <div className="home-content">  
                    <h3 className="title-card">POPULAR COURSE</h3>                  
                    <ListCardCourse></ListCardCourse>
                </div>
            </section>
        </>
    )
}

export default Home; 
