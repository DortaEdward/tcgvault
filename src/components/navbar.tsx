import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="sticky z-10 bg-transparent">
      {open ? <MobileMenu /> : <></>}
      <header className="mx-auto flex items-center justify-between px-16 py-4 md:container">
        <div>
          <p className="text-2xl font-medium text-gray-100">TCG Vault</p>
        </div>
        <nav className="hidden flex-1 items-center justify-between pl-10 md:flex">
          <ul>
            <li>
              <Link
                href={"/"}
                className="font-light text-gray-400 hover:text-gray-200"
              >
                Home
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href={"/contact"}
              className="font-light text-gray-400 hover:text-gray-200"
            >
              Contact
            </Link>
            {session?.user ? (
              <>
                <button
                  onClick={() => signOut()}
                  className="rounded-md border border-gray-700 px-3 py-1 text-gray-100 hover:bg-gray-100/10"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button className="rounded-md border border-gray-700 px-3 py-1 text-gray-100 hover:bg-gray-100/10">
                  Sign In
                </button>
                <button className="rounded-md bg-gray-100 px-3 py-1 text-black hover:bg-gray-300">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </nav>
        {open ? (
          <MdClose
            className="cursor-pointer text-gray-100 md:hidden"
            size={32}
            onClick={() => setOpen((prev) => !prev)}
          />
        ) : (
          <MdMenu
            className="cursor-pointer text-gray-100 md:hidden"
            size={32}
            onClick={() => setOpen((prev) => !prev)}
          />
        )}
      </header>
    </div>
  );
}

export default Navbar;

function MobileMenu() {
  return (
    <div className="absolute top-[66px] flex h-[calc(100vh-66px)] w-full bg-neutral-950 px-4 py-6 text-gray-100 md:hidden">
      <ul className="flex w-full flex-col gap-2">
        <ul className="flex flex-col gap-3">
          <li>
            <button className="w-full rounded-md border border-gray-700 px-3 py-3 text-gray-100 hover:bg-gray-100/10">
              Sign In
            </button>
          </li>
          <li>
            <button className="w-full rounded-md bg-gray-100 px-3 py-3 text-black hover:bg-gray-300">
              Sign Up
            </button>
          </li>
        </ul>
        <ul className="flex flex-col">
          <li className="border-b py-4 border-gray-500 cursor-pointer hover:bg-white/5">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="border-b py-4 border-gray-500 cursor-pointer hover:bg-white/5">
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}
