import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Button</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
