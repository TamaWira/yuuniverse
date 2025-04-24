import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="hidden lg:flex justify-between items-center p-2 px-5">
      <div className="flex items-center gap-3">
        <Logo />
        <p className="font-bold text-xl">YuuNiverse</p>
      </div>
      <nav className="top-3 right-6 z-40 fixed flex items-center gap-3">
        <ul className="flex items-center gap-4 bg-white shadow-xl p-3 px-5 border rounded-full h-9 text-black">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact Me</li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
