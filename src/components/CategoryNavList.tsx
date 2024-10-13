interface CategoryNavItemProps {
  category: {
    slug: string;
    name: string;
  };
}

const CategoryNavItem = ({ category }: CategoryNavItemProps) => {
  return (
    <li className="flex justify-center items-center pt-4 p-3 w-36 text-center text-wrap transition-all border-b-2 border-transparent hover:font-bold hover:border-b-2 hover:border-y-neutral-400">
      <a
        href={`
        /category/${category.slug}
      `}
      >
        <span className="uppercase">{category.name}</span>
      </a>
    </li>
  );
};

const CategoryNavList = () => {
  return (
    <nav className="border-t md:border-b border-neutral-400 p-2 bg-transparent md:bg-neutral-500 text-neutral-50 font-semibold">
      <ul className="hidden md:flex flex-row justify-center">
        <CategoryNavItem category={{ slug: "portails", name: "Portails" }} />
        <div className="h-7 my-auto border-r border-neutral-100" />
        <CategoryNavItem
          category={{ slug: "portillons", name: "Portillons" }}
        />
        <div className="h-7 my-auto border-r border-neutral-100" />
        <CategoryNavItem category={{ slug: "pergolas", name: "Pergolas" }} />
      </ul>
    </nav>
  );
};

export default CategoryNavList;
