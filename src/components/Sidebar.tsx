// components/Sidebar.tsx
import { pages } from "@/src/config/pages";
import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  // props if needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
       <nav>
        {pages.map(page => (
          <Link key={page.url} href={page.url}>
            <a>{page.title}</a>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
