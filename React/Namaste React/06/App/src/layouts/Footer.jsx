const Footer = () => (
    <footer className="site-footer">
        <div className="footer-content">
            <div className="footer-section">
                <h4>About Us</h4>
                <p>At Foodie, we're not just about food; we're about creating unforgettable experiences.</p>
            </div>
            <div className="footer-section">
                <h4>Contact</h4>
                <p>Email: contact@tastytreat.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://twitter.com">Twitter</a>
                    <a href="https://instagram.com">Instagram</a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tasty Treat. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;