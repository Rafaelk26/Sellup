declare module "expo-skeleton-loading" {
  import React, { ReactElement } from "react";

  interface SkeletonProps {
    background: string;
    highlight: string;
    children: ReactElement;
  }

  const SkeletonLoading: React.FC<SkeletonProps>;

  export default SkeletonLoading;
}