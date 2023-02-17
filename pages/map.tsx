import type { NextPage } from "next";
import styles from "../styles/Theme.module.css";

const Map: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mintInfoContainer}>
        {/* allow="geolocation *; camera *;" frameborder="0" */}
        <div ><iframe style={{ overflow: 'hidden', width: '100%', height: '600px', }} allow="geolocation *; camera *;" frameBorder="0" src="https://www.mapotic.com/restorecoral/embed?zoom=7&lng=-87.17094137840468&lat=20.49700569975345"></iframe></div>
      </div>
    </div >
  );
};

export default Map;