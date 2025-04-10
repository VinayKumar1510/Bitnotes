"use client";
import React from "react";

export default function BasicFooter() {
  return (
    <footer className="w-full py-4 text-white">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Notes & Todos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}