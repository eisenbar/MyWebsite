import footerStyle from "../styles/footer.module.css";
import React from "react";
import styles from "../styles/layout.module.css";
import Link from "next/link";

export default function Footer({home}) {
    return (
      <div className={`${footerStyle.bg} ${footerStyle.footer}`}>
          {!home && (
              <div >
                  <Link href="/">
                      <a>← Back to home</a>
                  </Link>
              </div>
          )}
      </div>
    );
}