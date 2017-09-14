import React from 'react';
import BackToTopFromFooter from './back-to-top-from-footer';
import CopyRight from './copy-right';
import './style.css';

const Footer = () => (
	<footer className="footer-main">
		<BackToTopFromFooter />
		<CopyRight title="Copyright © 2017 HomeYantra.com. All Rights Reserved" />
	</footer>
);

export default Footer;
