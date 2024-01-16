import { Link } from "react-router-dom";

const NavigationItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Resume",
      href: "/resume",
    },
    {
      name: "About",
      href: "/about",
    },
  ] as const;
  

const Header = (): JSX.Element => {
  
  return (
   <>
    Header
    <nav>
      <ul>
        {NavigationItems.map((item) => {
          return (
            <li key={item.href}>
                <Link to={item.href}>
              {item.name}
                </Link>
            </li>
          );
        })}
      </ul>
    </nav>
   </>
  );
};

export default Header;
