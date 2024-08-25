import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__links-container">
                <div className="footer__rights">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                    <p className="text-base text-gray-700">
                        Drive Display {currentYear} <br />
                        All rights reserved &copy;
                    </p>
                </div>

                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-gray-500"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer__copyrights">
                <p>&copy; {currentYear} Drive Display. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link href="/privacy" className="text-gray-500">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-gray-500">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
