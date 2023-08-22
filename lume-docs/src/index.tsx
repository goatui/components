import button from "./_components/button.jsx";
export const title = "Welcome to my page";
export const layout = "base.tsx";

export default ({title, comp}) => (
  <>
    <h1>{title}</h1>
    { button({ text: "Login" }) }
    <p>This is my first post using lume. I hope you like it!</p>
  </>
);
