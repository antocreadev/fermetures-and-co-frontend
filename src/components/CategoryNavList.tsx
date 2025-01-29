interface CategoryNavItemProps {
  category: {
    slug: string;
    name: string;
  };
}

const CategoryNavItem = ({ category }: CategoryNavItemProps) => {
  return (
    <li className="flex justify-center items-center pt-4 p-3 w-40 text-center text-wrap transition-all border-b-2 border-transparent hover:font-bold hover:border-b-2 hover:border-y-neutral-400">
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
// portails coulissant, portail battant, portillon, accessoire portail, motorisation portail, pergolas
const CategoryNavList = () => {
  return (
    <nav className="border-t md:border-b border-neutral-700 p-2 bg-transparent md:bg-neutral-700 text-neutral-50 font-semibold">
      <ul className="hidden md:flex flex-row justify-center">
        <CategoryNavItem
          category={{ slug: "porte-sectionnelle", name: "Porte sectionnelle" }}
        />
        <div className="h-7 my-auto border-r border-neutral-100" />

        <CategoryNavItem
          category={{ slug: "rideau-metallique", name: "Rideau métallique" }}
        />
        <div className="h-7 my-auto border-r border-neutral-100" />

        <CategoryNavItem
          category={{ slug: "portail-coulissant", name: "Portail coulissant" }}
        />
        <div className="h-7 my-auto border-r border-neutral-100" />
        <CategoryNavItem
          category={{ slug: "portail-battant", name: "portail battant" }}
        />
        <div className="h-7 my-auto border-r border-neutral-100" />
        <CategoryNavItem category={{ slug: "portillon", name: "portillon" }} />
        {/* <div className="h-7 my-auto border-r border-neutral-100" />
        <CategoryNavItem
          category={{ slug: "accessoire-portail", name: "accessoire portail" }}
        /> */}
        <div className="h-7 my-auto border-r border-neutral-100" />
        <CategoryNavItem
          category={{
            slug: "motorisation-portail",
            name: "motorisation portail",
          }}
        />
        <div className="h-7 my-auto border-r border-neutral-100" />
        <CategoryNavItem category={{ slug: "pergola", name: "pergola" }} />
      </ul>
    </nav>
  );
};

export default CategoryNavList;
