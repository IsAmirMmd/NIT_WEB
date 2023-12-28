const Footer = () => {
    return (<footer className="footer">
        <div className="footer--text">
            <div className="footer--text__thanks">
                <h4>Amir Mohammad</h4>
                <p>Thanks For Reading!</p>
            </div>
        </div>

        <div className="footer--link">
            <h4>Links</h4>
            <ul className="footer--link__list">
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/isamirmmd">Linkedin</a>
                </li>
                <li>
                    <a href="#">Twitter/X</a>
                </li>
                <li>
                    <a href="mailto:amirfanweb@gmail.com">amirfanweb@gmail.com</a>
                </li>
            </ul>
        </div>

        <p className="footer--text__copyright">
            © 2020-present Joshua Comeau. All Rights Reserved.
        </p>
    </footer>);
}

export default Footer;