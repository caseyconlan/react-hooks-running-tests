import React from "react";

function Article(props) {
  return <h1>hello from the Article!</h1>;
}

export default Article;
render(<Article />);

expect(screen.queryByText("please pass this test")).toBeInTheDocument();
