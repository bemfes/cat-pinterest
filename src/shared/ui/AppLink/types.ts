import React from "react";

export interface AppLinkProps {
    to: string;
    children: React.ReactNode;
    className?: (isActive: { isActive: boolean }) => string;
}