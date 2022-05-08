import Link from "next/link";
import { Button } from "./Button";
import { LogoSimpleWhite } from "./LogoSimpleWhite";

export function Navbar() {
  return(
    <header className='flex justify-center w-full py-4 bg-theme-black text-theme-white'>
    <nav className='flex items-center justify-between w-full px-4 font-bold max-w-7xl' >
      <Link href="/">
        <a>
        <LogoSimpleWhite/>
        </a>
      </Link>
      <div className='flex items-center justify-center gap-6 text-lg'>
        <a href="#events" className='transition-all cursor-pointer hover:text-theme-green hover:brightness-110'>Programação</a>
        <a href="#speakers" className='transition-all cursor-pointer hover:text-theme-green hover:brightness-110'>Palestrantes</a>
        <a href="#certificates" className='transition-all cursor-pointer hover:text-theme-green hover:brightness-110'>Certificados</a>
        <a href="#organization" className='transition-all cursor-pointer hover:text-theme-green hover:brightness-110'>Organização</a>
        <Button href="#registration">Inscreva-se</Button>
      </div>
    </nav>
  </header>
  )
}