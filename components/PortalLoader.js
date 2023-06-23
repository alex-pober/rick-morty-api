import React from "react";
import Image from "next/image";
import styles from "@/styles/PortalLoader.module.css"

export function PortalLoader() {
  return (
    <div className={`${styles.portal}`}>
      <Image src="/portal.png" alt="loading portal spinner" width={250} height={250}/>
    </div>
  );
}
