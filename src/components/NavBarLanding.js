import react from 'react';
import {useHistory} from "react-router-dom";


const NavBarLanding = () => {

  const history = useHistory();
  const routeChange = () => {
    let path = '/Signin';
    history.push(path);
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-landing">
      <div className="container-fluid dim-container-fluid">
        <div className = "nav-content">
          <a className="navbar-brand" href="#">
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M54.3623 5.364V7.83H51.0143V18H47.9363V7.83H44.5883V5.364H54.3623ZM64.425 7.956V18H61.347V16.632C61.035 17.076 60.609 17.436 60.069 17.712C59.541 17.976 58.953 18.108 58.305 18.108C57.537 18.108 56.859 17.94 56.271 17.604C55.683 17.256 55.227 16.758 54.903 16.11C54.579 15.462 54.417 14.7 54.417 13.824V7.956H57.477V13.41C57.477 14.082 57.651 14.604 57.999 14.976C58.347 15.348 58.815 15.534 59.403 15.534C60.003 15.534 60.477 15.348 60.825 14.976C61.173 14.604 61.347 14.082 61.347 13.41V7.956H64.425ZM74.3259 5.364V7.83H70.9779V18H67.8999V7.83H64.5519V5.364H74.3259ZM80.6447 7.848C81.7967 7.848 82.7207 8.232 83.4167 9C84.1127 9.756 84.4607 10.8 84.4607 12.132V18H81.4007V12.546C81.4007 11.874 81.2267 11.352 80.8787 10.98C80.5307 10.608 80.0627 10.422 79.4747 10.422C78.8867 10.422 78.4187 10.608 78.0707 10.98C77.7227 11.352 77.5487 11.874 77.5487 12.546V18H74.4707V4.68H77.5487V9.306C77.8607 8.862 78.2867 8.508 78.8267 8.244C79.3667 7.98 79.9727 7.848 80.6447 7.848ZM89.7716 18.144C88.7876 18.144 87.8996 17.934 87.1076 17.514C86.3276 17.094 85.7096 16.494 85.2536 15.714C84.8096 14.934 84.5876 14.022 84.5876 12.978C84.5876 11.946 84.8156 11.04 85.2716 10.26C85.7276 9.468 86.3516 8.862 87.1436 8.442C87.9356 8.022 88.8236 7.812 89.8076 7.812C90.7916 7.812 91.6796 8.022 92.4716 8.442C93.2636 8.862 93.8876 9.468 94.3436 10.26C94.7996 11.04 95.0276 11.946 95.0276 12.978C95.0276 14.01 94.7936 14.922 94.3256 15.714C93.8696 16.494 93.2396 17.094 92.4356 17.514C91.6436 17.934 90.7556 18.144 89.7716 18.144ZM89.7716 15.48C90.3596 15.48 90.8576 15.264 91.2656 14.832C91.6856 14.4 91.8956 13.782 91.8956 12.978C91.8956 12.174 91.6916 11.556 91.2836 11.124C90.8876 10.692 90.3956 10.476 89.8076 10.476C89.2076 10.476 88.7096 10.692 88.3136 11.124C87.9176 11.544 87.7196 12.162 87.7196 12.978C87.7196 13.782 87.9116 14.4 88.2956 14.832C88.6916 15.264 89.1836 15.48 89.7716 15.48ZM98.3385 9.63C98.6985 9.078 99.1485 8.646 99.6885 8.334C100.229 8.01 100.829 7.848 101.489 7.848V11.106H100.643C99.8745 11.106 99.2985 11.274 98.9145 11.61C98.5305 11.934 98.3385 12.51 98.3385 13.338V18H95.2605V7.956H98.3385V9.63Z" fill="white"/>
            </svg>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      
      <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Precios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Contactanos</a>
          </li>
          
        </ul>
      </div>

      <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-nav">
          <li className="nav-item">
            <div className="logup">
              <a className="nav-link active " aria-current="page" href="Login">Inicio de sesión</a>
            </div>
          </li>
          <li className="nav-item mx-5">
            <button type="button" className="btn btn-primary btn-nav-logup" onClick={routeChange} data-bs-toggle="button">Registrate</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBarLanding;
