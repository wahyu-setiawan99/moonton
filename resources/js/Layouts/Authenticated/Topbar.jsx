import { Link } from "@inertiajs/react";
import { useState, useRef } from "react";

export default function Topbar({ name }) {
    const [dropdownOpen, setDropDownOpen] = useState(true);
    const dropDownTarget = useRef();

    const toggleDropDown = () => {
        if (dropdownOpen) {
            dropDownTarget.current.classList.remove("hidden");
            dropDownTarget.current.classList.add("flex");
        } else {
            dropDownTarget.current.classList.add("hidden");
        }
        setDropDownOpen(!dropdownOpen);
    };

    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {name}
                </span>

                <div className="collapsible-dropdown flex flex-col gap-2 relative cursor-pointer">
                    <div
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                        onClick={toggleDropDown}
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </div>
                    <div
                        className="bg-white rounded-2xl text-black font-medium flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        ref={dropDownTarget}
                    >
                        <Link
                            as="button"
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </Link>
                        <Link
                            as="button"
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </Link>
                        <Link
                            href={route("logout")}
                            method="post"
                            className="transition-all hover:bg-sky-100 p-4"
                            as="button"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx="true">
                {`
                    .top-search {
                        background-image: url("/icons/ic_search.svg");
                    }
                `}
            </style>
        </div>
    );
}
