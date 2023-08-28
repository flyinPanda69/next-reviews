import type { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

// Root layout, like a template html document for all our pages
export default function RootLayout({ children }: layoutProps) {
  return (
    <html lang="en">
      <body>
        <header>[Header]</header>
        <main>{children}</main>
        <footer>[Footer]</footer>
      </body>
    </html>
  );
}

// Function name can be anything, main thing is it should export default
// Since its just a html template, it should return html and language is en (good to add)
// Like all react component it takes props, lets destructure it to children, that will be element to specific page
