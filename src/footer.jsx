import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-title">Coquetas INC &copy; Todos los derechos reservados.</p>
                <p>Dirección: Simancas (Madriz)</p>
                <p>Teléfono: 917335673 - 635444912</p>
                <p>Email: <a href="mailto:croquetasINC@hotmail.com" className="footer-link">croquetasINC@hotmail.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;