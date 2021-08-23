import react, {Fragment} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NavBarLanding from './NavBarLanding';




const Landingpage = ()=> {



    const estiloContenedor = {
        textAlign: 'center'
    }
    return (
        <Fragment>
            <NavBarLanding></NavBarLanding>
            <div className = "row body-landing">
                <div className="sm-col-12 md-col-6 lg-col-6 ">
                    <div className = "landin-text">
                        <h5 className="landin-header-text">Unete a nuestra plataforma</h5>
                        <h3 className = "landing-body-text my-3">Adquiere y comparte conocimiento en nuestra red de tutorias</h3>
                        <h6 className="landin-footer-text my-3">Una oportunidad para todos</h6>
                    </div>
                </div>

                <div className="sm-col-12 md-col12 lg-col-6">
                    <img className="img-math" src={"./img/math.png"} alt="img-math"/>
                    <img className="img-student" src={"./img/student.png"} alt="img_student"/>
                </div>
            </div>
                <div style= {estiloContenedor}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={4}>
                            <Box  style={{color:'black'}} bgcolor="white" color="primary.contrastText" p={2}>
                                <div className="section-title">
                                    <h2>Siguenos</h2>
                                </div>
                                <p style={estiloContenedor}>Siguenos en nuestras redes sociales<br/></p>
                            </Box>
                        </Grid>
                                            
                        <Grid item xs={12} sm={4}>
                            <Box  style={{color:'black'}} bgcolor="white" color="primary.contrastText" p={2}>
                                <div className="section-title">
                                    <h2>Quienes Somos</h2>
                                </div>
                                <div style={{textAlign: 'center',}}>
                                    
                                    Acerca de
                                        <br/>
                                
                                            <ul>
                                                <li>Vision</li>
                                                <li>Mision</li>
                                            </ul>

                                   
                                </div>
                                <br/><br/><br/>
                                <div style={{textAlign:'center'}}>
                                    <div style={{textAlign:'center'}}>
                                        &copy; Copyright <strong><span>TUTHOR</span></strong>. All Rights Reserved
                                    </div>
                                    <div >
                                        Designed by Grupo TUTHOR
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box  style={{color:'black'}} bgcolor="white" color="primary.contrastText" p={2}>
                                <div className="section-title">
                                    <h2>Caracteristicas</h2>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    
                                        <ul>
                                            <li>Aprende con tutorias</li>
                                            <li>Comparte Conocimiento</li>
                                            <li>Interactua con usuarios</li>
                                        </ul>

                                
                                </div>
                            </Box>
                        </Grid>
                    </Grid>     
                    </div>
        </Fragment>
    );
}

export default Landingpage;
