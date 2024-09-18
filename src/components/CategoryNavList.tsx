interface CategoryNavItemProps {
  category: {
    slug: string;
    name: string;
  };
}

const CategoryNavItem = ({ category }: CategoryNavItemProps) => {
  return (
    <li className="pt-4 p-3 w-28 text-center text-wrap hover:font-semibold hover:border-b-2 border-y-blue-400">
      <a
        href={`
        /category/${category.slug}
      `}
      >
        {category.name}
      </a>
    </li>
  );
};

const CategoryNavList = () => {
  return (
    <nav className="border-t border-gray-400">
      <ul className="hidden md:flex flex-row justify-center">
        <CategoryNavItem
          category={{ slug: "electronics", name: "Electronics" }}
        />
        <div className="h-7 my-auto border-r border-gray-500" />
        <CategoryNavItem category={{ slug: "clothing", name: "Clothing" }} />
      </ul>
    </nav>
  );
};

export default CategoryNavList;
