import Document, { Head, Html, Main, NextScript } from 'next/document';
// Import the Document class and the Head, Html, Main, and NextScript components from the next/document library.

class MyDocument extends Document {
  // Define the MyDocument class, which extends the Document class.


  render() {
    // Render the `MyDocument` component.
    return (
      <Html lang="en">
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
