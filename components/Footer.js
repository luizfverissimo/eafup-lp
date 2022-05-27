import Link from "next/link";
import { Button } from "./Button";
import { LogoSimpleWhite } from "./LogoSimpleWhite";

export function Footer() {
  return(
    <header className='flex justify-center w-full py-4 mt-16 bg-theme-black text-theme-white'>
    <nav className='flex items-center justify-between w-full px-4 font-bold max-w-7xl' >
      <Link href="/">
        <a>
        <LogoSimpleWhite/>
        </a>
      </Link>
      <Link href="/">
        <a className="font-sans font-bold cursor-pointer text-theme-white">↑ Topo</a>
      </Link>
      <div className='flex items-center justify-center gap-6 text-lg'>
        <Button href="#registration">Inscreva-se</Button>
      </div>
    </nav>
  </header>
  )
}