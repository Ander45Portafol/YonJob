import { useState } from "react";
import "../assets/main.css";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Sidebar } from "../components/Sidebar";
import { MobileMenu } from "../components/MobileMenu";
import { Outlet } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export function Principal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-[#051E51] px-6 pb-2 before:pointer-events-none before:absolute before:inset-0 before:border-r before:border-white/10 before:bg-black/10">
                <div className="relative flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="/Images/IconYonJob.svg"
                    className="h-12 w-auto mt-4"
                  />
                </div>
                <MobileMenu />
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-[#051E51]">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="relative flex grow flex-col gap-y-5 overflow-y-auto border-r border-white/10 px-6 pb-4">
            <div className="relative flex h-20 shrink-0 items-center">
              <img
                alt="Your Company"
                src="/Images/IconYonJob.svg"
                className="h-12 w-auto"
              />
            </div>
            <Sidebar />
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-[#051E51] px-4 py-4 before:pointer-events-none before:absolute before:inset-0 before:border-b before:border-white/10 sm:px-6 lg:bg-white">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="relative -m-2.5 p-2.5 text-gray-400 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          <div className="relative flex-1 text-sm/6 font-semibold text-white"></div>
          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="relative flex items-center">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="/Images/Perfil_Example.png"
                className="size-8 rounded-full  outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10"
              />
              <span className="lg:items-center">
                <span
                  aria-hidden="true"
                  className="hidden ml-4 text-sm/6 font-semibold text-gray-900 dark:text-gray-900"
                >
                  Tom Cook
                </span>
                <ChevronDownIcon
                  aria-hidden="false"
                  className="ml-2 size-5 text-gray-400 dark:text-gray-500"
                />
              </span>
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            >
              {userNavigation.map((item) => (
                <MenuItem key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden dark:text-white dark:data-focus:bg-white/5"
                  >
                    {item.name}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        <main className="lg:pl-72 w-full">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            {/* Main area */}
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
