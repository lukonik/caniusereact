import github from "./assets/github.png";
import logo from "./assets/logo.png";
export default function Header() {
  return (
    <header className="flex items-center p-2 border-b h-14 border-b-gray-200 mb-4">
      <img src={logo} alt="Which React Logo" width={50} height={50} />
      <h1 className="text-2xl ml-4">Which React</h1>
      <a
        href="https://github.com/lukonik/which-react"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto"
        aria-label="Github repo link"
      >
        <img src={github} width={40} height={40} alt="Github logo" />
      </a>
    </header>
  );
}
