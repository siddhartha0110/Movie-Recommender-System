import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader} from 'reactstrap';
import { Link } from 'react-router-dom';


/*function RenderLeaders({Leader}){
    return(
            <Media className="mt-4">
                <Media left className="mr-5">
                    <Media object src={Leader.image} alt="Leader Image" />
                </Media>
                <Media body>
                    <Media heading>
                       <p>{Leader.name}</p>
                    </Media>
                    <strong>{Leader.designation}</strong>
                    <p></p>
                    {Leader.description}                       
                </Media>
            </Media>
    );
}*/

function About(props) {

    /*const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeaders Leader={leader}/>
        );
        <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                   {leaders}
                </div>
            </div>
    });*/


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2019,Binge Watch is an online movie browsing site which recommends you movies based on your previous movies.</p>
                    <p>Binge Watch Uses <em>ML and AI</em>,to recommend you movies which you like the best.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">12 Sept. 2019</dd>
                                <dt className="col-6">Major Work Done in</dt>
                                <dd className="col-6">B6 & B7</dd>
                                <dt className="col-6">People Visited</dt>
                                <dd className="col-6">4</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">4</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">I'm going to make him an offer he can't refuse</p>
                                <footer className="blockquote-footer">Don Corleone,
                                <cite title="Source Title">The GodFather,1972</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
    
        </div>
    );
}

export default About;    