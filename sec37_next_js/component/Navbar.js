import Link from "next/link";
const Navbar = () => {
  const style = {
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  return (
    <div style={style}>
      <Link href="/">
        {/* <link> pass a Click to chilren component */}
        <a>Home page</a>
      </Link>
      <Link href="/about">
        <a>About page</a>
      </Link>
      <Link href="/contact">
        <a>Contact page</a>
      </Link>
    </div>
  );
};
export default Navbar;
