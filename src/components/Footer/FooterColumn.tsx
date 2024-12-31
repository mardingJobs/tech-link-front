import React from 'react';

interface FooterColumnProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.text}>
            <a 
              href={link.href}
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;