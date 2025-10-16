import clsx from "clsx";
import { Link } from "react-router-dom";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumbs" className="mb-6 block ">
      <ol className=" flex text-md md:text-lg font-medium h">
        {breadcrumbs.map((item, index) => (
          <li
            key={item.href}
            aria-current={item.active}
            className={clsx(
              item.active ? "text-gray-900" : "text-gray-500",
              "hover:text-alternate"
            )}
          >
            <Link to={item.href}>{item.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-2">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
