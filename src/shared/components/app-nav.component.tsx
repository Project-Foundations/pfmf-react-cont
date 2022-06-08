import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Option } from '../../domain/options';

type AppNavProps = {
  options: Option[] | undefined;
};

export const AppNav: FC<AppNavProps> = ({ options }): JSX.Element => {
  return (
    <nav className="bg-alternative w-2/12 p-2">
      <ul className="text-white ">
        {options && options.map((option) => (
          <Link key={option.id} to={option.link}>Products</Link>
        ))}
      <li>
        </li>
      </ul>
    </nav>
  );
};
