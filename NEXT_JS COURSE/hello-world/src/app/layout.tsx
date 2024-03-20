import { Metadata} from 'next';

export const metadata : Metadata = {
  title: {
    default: "Airbnb",
    template: "%s | Airbnb"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style= {{
            backgroundColor: "lightblue",
            padding: "lrem"
          }}
        >
        <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "lightgreen",
            padding: "lrem"
          }}
        >
          <p>Footer</p>
        </footer>
        </body>
    </html>
  )
}
